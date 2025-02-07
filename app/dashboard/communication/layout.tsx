import React, {ReactNode} from "react";

import ChatList from "../_components/chat/list";

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="h-full overflow-hidden flex no-scrollbar gap-2 lg:gap-5 min-[1200px]:gap-20">
      <ChatList />
      {children}
    </div>
  );
}

export default Layout;
