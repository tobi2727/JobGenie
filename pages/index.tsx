import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoadingDots from "../components/LoadingDots";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const [aiTitleDesc, setaiTitleDesc] = useState<String>("");

  const aiDescRef = useRef<null | HTMLDivElement>(null);

  const DELIMITER_AI_TITLE = "Stellenbezeichnung:";
  const DELIMITER_AI_DESCRIPTION = "Stellenbeschreibung:";

  const scrollToAIDescs = () => {
    if (aiDescRef.current !== null) {
      aiDescRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `Erstelle eine Stellenbeschreibung für eine Stellenanzeige mit circa 200 Wörtern, für eine vakante Stelle als ${userInput}.`;

  const generateAiTitleDesc = async (e: any) => {
    e.preventDefault();
    setaiTitleDesc("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt, 
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setaiTitleDesc((prev) => prev + chunkValue);
    }
    scrollToAIDescs();
    setLoading(false);
  };

  return (
    <div className="flex max-w-5xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Stellenbeschreibungen mit K.I. erzeugen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col align-top items-center text-center p-4">
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <p className="text-center font-bold">
              Für welchen Beruf in welcher Branche möchten Sie eine Stellenbeschreibung erzeugen?{" "}
              <span className="text-slate-400">
                <br></br>
                (Geben Sie eine Berufsbezeichnung und Branche/Tätigkeitsfeld ein)
              </span>
              
            </p>
          </div>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "z.B. Feinwerkmechanikerin in der Uhrenherstellung, Testingenieur in der Automobilindustrie, ..."
            }
          />

          {!loading && (
            <button
              className="bg-rose-900 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-rose-900/60 w-full"
              onClick={(e) => generateAiTitleDesc(e)}
            >
              Stellenbeschreibung generieren &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-rose-900 rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-rose-900/60 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <div className="space-y-10 my-10">
          {aiTitleDesc && (
            <>
              <div className="whitespace-pre-wrap space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                {aiTitleDesc
                  .substring(DELIMITER_AI_TITLE.length)
                  .split(DELIMITER_AI_DESCRIPTION)
                  .map((aiResponse) => {
                    return (
                      <div
                        className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                        onClick={() => {
                          navigator.clipboard.writeText(aiResponse);
                          toast("In Zwischenablage kopiert", {
                            icon: "✂️",
                          });
                        }}
                        key={aiResponse}
                      >
                        {aiResponse.trim()}
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
