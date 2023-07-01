"use client";
export default function FixedBar() {
  return (
    <div>

      <div className="fixed  bottom-0 left-0 right-0 bg-white/30 backdrop-blur-md md:hidden">
        <p className="text-center text-xl font-bold capitalize ">
          <a
            href="tel:0980806764"
            className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
          >
            Appelez nous au 09 80 80 67 64
          </a>
        </p>
      </div>
    </div>
  );
}
