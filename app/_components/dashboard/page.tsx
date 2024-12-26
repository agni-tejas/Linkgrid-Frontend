"use client";

import { useState } from "react";
import { useSearchDialog } from "./search/SearchDialogContext";
import { NetworkSearch2 } from "./search/NetworkSearch";
import { Sidebar } from "./sidebar/Sidebar";
import { AIAssistantsPage } from "./AIAssistants/AIAssistantsPage";
import { AnimatePresence } from "framer-motion";
import { MotionContainer } from "./requests/animations/MotionContainer";
import InvitationsTable from "./requests/InvitationsTable";
import { mockInvitations } from "@/app/_lib/mockInvitations";
import { RecommendationsPage } from "./Recommendations/RecommendationsPage";
import { SettingsPage } from "./Settings/SettingsPage";
import { GroupsPage } from "./Groups/GroupsPage";
import { ProcessingPage } from "./Processing/ProcessingPage";
import { PricingPage } from "./Pricing/PricingPage";

function Main() {
  const [activeSection, setActiveSection] = useState<string>("search");
  const { isCollapsed } = useSearchDialog();

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };
  console.log(activeSection);

  return (
    <div
      className="flex w-full  bg-gradient-to-r from-[#FFDEE9] via-[#B5FFFC] to-[#EECFF8] dark:from-[#6B298C] dark:via-[#000000] dark:to-[#030B2C]

"
    >
      <div className={`${isCollapsed ? "w-[70px]" : "w-[364px]"} flex`}>
        <Sidebar onSectionChange={handleSectionChange} />
      </div>
      <main className="w-full flex ">
        {activeSection === "search" ? (
          <NetworkSearch2 />
        ) : activeSection === "invites" ? (
          <AnimatePresence>
            <MotionContainer className="w-full">
              <InvitationsTable invitations={mockInvitations} />
            </MotionContainer>
          </AnimatePresence>
        ) : activeSection === "ai" ? (
          <AIAssistantsPage />
        ) : activeSection === "recommend" ? (
          <RecommendationsPage />
        ) : activeSection === "settings" ? (
          <SettingsPage />
        ) : activeSection === "groups" ? (
          <GroupsPage />
        ) : activeSection === "plan" ? (
          <PricingPage />
        ) : activeSection === "plan" ? (
          <ProcessingPage />
        ) : (
          <>
            <ProcessingPage />
          </>
        )}
      </main>
    </div>
  );
}

export default Main;
