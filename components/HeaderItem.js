export default function HeaderItem({ Icon, title }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white">
      <Icon className="h-7 mb-1 transition group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}