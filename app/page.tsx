import React from 'react'
import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
        <h1>Popular Companions</h1>

        <section className="home-section">
            <CompanionCard />
            <CompanionCard />
            <CompanionCard />
        </section>

        <section className="home-section">
            <CompanionList
            title="Recently completed sessions"
            companions = {recentSessions}
            classNames="w-2/3 max-lg:w-full"
            />
            <CTA />
        </section>
    </main>
  )
}

export default Page