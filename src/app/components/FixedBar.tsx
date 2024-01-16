"use client";
export default function FixedBar() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center space-x-1 bg-white shadow-2xl md:hidden">
        <p className="text-center text-md font-bold capitalize ">
          <a
            href="tel:0980803643"
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            Appelez-nous  09 80 80 36 43
          </a>
        </p>
      </div>
    </>
  );
}
