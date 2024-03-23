import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    
    <header className="flex justify-center items-center w-full m:px-4 px-2" style={{ marginTop: '100px' }}>
      <Image
        alt="Stellenbeschreibungen mit K.I. erstellen"
        src="/hiredrive.png"
        width={250}
        height={250}
      />
    </header>
  );
}