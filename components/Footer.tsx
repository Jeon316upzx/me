import Logo from "./Logo";

const Footer = () => {
  const today = new Date();
  return (
    <footer className="container mx-auto mb-[2rem] mt-[8rem] border-t border-t-zinc-200 px-5 pt-5 dark:border-t-neutral-800">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="col-span-1">
          <div className="text-secondary text-sm">
            &copy; {today.getFullYear()} Ifeanyi Anuebunwa. All rights reserved.
          </div>

          <div className="text-secondary ms-4 font-mono text-sm">
            version
            <span className="mx-1 bg-green-400 bg-opacity-10 text-green-600">
              {today.getFullYear()}
            </span>
            -{today.getMonth() + 1}-
            {today.getDate().toString().padStart(2, "0")}/001
          </div>
        </div>

        <div className="text-secondary justify-end ms-4 mt-8 lg:mt-0 lg:text-end h-10 w-10">
          <Logo/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
