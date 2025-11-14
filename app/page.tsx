import HomeWrapper from "@/components/home/HomeWrapper";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhatYouAreDoingWrong from "@/components/home/WhatYouAreDoingWrong";
import ButYourStill from "@/components/home/ButYourStill";
import EquinovaSolution from "@/components/home/EquinovaSolution";
import Banner from "@/components/base/banner";
import TransformYourOperation from "@/components/home/TransformYourOperation";
import ButThatsNotAll from "@/components/home/ButThatsNotAll";
import WhyEquinovaVsEverything from "@/components/home/WhyEquinovaVsEverything";
import CompetitorsTools from "@/components/home/CompetitorsTools";
import EquinovaPricing from "@/components/base/equinova-pricing";
import JoinTheWaitList from "@/components/base/join-the-waitlist";
import FAQS from "@/components/base/faqs";
import JoinTheEquinova from "@/components/home/JoinTheEquinova";
import ReadyToJoin from "@/components/base/ready-to-join";
import NotReadyToCommit from "@/components/home/NotReadyToCommit";

export default function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <About />
      <WhatYouAreDoingWrong />
      <ButYourStill />
      <EquinovaSolution />
      <Banner />
      <TransformYourOperation />
      <ButThatsNotAll />
      <WhyEquinovaVsEverything />
      <CompetitorsTools />
      <EquinovaPricing />
      <JoinTheWaitList />
      <FAQS />
      <JoinTheEquinova />
      <ReadyToJoin />
      <NotReadyToCommit />
    </HomeWrapper>
  );
}
