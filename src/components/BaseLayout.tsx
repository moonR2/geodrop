import type { PropsWithChildren } from "react";

const BaseLayout = (props: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-full">
      <div className="flex flex-col items-center justify-center flex-grow space-y-5">
        {props.children}
      </div>
    </div>
  );
};

export default BaseLayout;
