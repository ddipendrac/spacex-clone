import React from 'react'
import '../styles/StarshipUpdate.css'

function StarshipUpdate() {
  return (
    <div className='section-update'>
      <div className='updates-top'>
        <div className='text-top'>
          UPDATES
        </div>
      </div>

      <div className='showcase'>
        <img src='./images/update/update2.jpg' className='showcase-image safety' />
        <div className='showcase-date safety'>
          FEBRUARY 22, 2022
        </div>
        <div className='showcase-shadowed'>
          SPACEX'S APPROACH TO SPACE SUSTAINABILITY AND SAFETY
        </div>

        <div className='showcase-description'>
          <div className='showcase-d d-1'>
            SpaceX was founded to revolutionize space technology towards making life multiplanetary. SpaceX is the world’s leading provider of launch services and is proud to be the first private company to have delivered astronauts to and from the International Space Station (ISS), and the first and only company to complete an all-civilian crewed mission to orbit. As such, SpaceX is deeply committed to maintaining a safe orbital environment, protecting human spaceflight, and ensuring the environment is kept sustainable for future missions to Earth orbit and beyond.
          </div>
          <div className='showcase-d d-2'>
            SpaceX has demonstrated this commitment to space safety through action, investing significant resources to ensure that all our launch vehicles, spacecraft, and satellites meet or exceed space safety regulations and best practices, including:
          </div>
          <ul className='showcase-list'>
            <li className='list-item'>
            Designing and building highly reliable, maneuverable satellites that have demonstrated reliability of greater than 99%
            </li>
            <li className='list-item'>
            Operating at low altitudes (below 600 km) to ensure no persistent debris, even in the unlikely event a satellite fails on orbit
            </li>
            <li className='list-item'>
            Inserting satellites at an especially low altitude to verify health prior to raising into their on-station/operational orbit
            </li>
            <li className='list-item'>
            Transparently sharing orbital information with other satellite owners/operators
            </li>
            <li className='list-item'>
            Developed an advanced collision avoidance system to take effective action when encounter risks exceed safe thresholds
            </li>
          </ul>
          <div className='showcase-d d3'>
            With space sustainability in mind, we have pushed the state-of-the-art in key technology areas like flying satellites at challenging low altitudes, the use of sustainable electric propulsion for maneuvering and active de-orbit, and employing inter-satellite optical communications to constantly maintain contact with satellites. SpaceX is striving to be the world’s most open and transparent satellite operator, and we encourage other operators to join us in sharing orbital data and keeping the public and governments updated with detailed information about operations and practices.
          </div>

          <div className='showcase-d d4'>
          SpaceX continues to innovate to accelerate space technologies, and we are currently providing much-needed internet connectivity to people all over the globe, including underserved and remote parts of the world, with our Starlink constellation. Below are our operating principles demonstrating our commitment to space sustainability and safety.
          </div>
          <div className='showcase-t t1'>

          DESIGNING AND BUILDING SAFE, RELIABLE AND DEMISABLE SATELLITES
          </div>
          <div className='showcase-d'>
          SpaceX satellites are designed and built for high reliability and redundancy in both supply chain and satellite design to successfully carry out their five-year design life. Rigorous part and system-level screening and testing enable us to reliably build and launch satellites at very high rates. We have the capacity to build up to 45 satellites per week, and we have launched up to 240 satellites in a single month. This is an unprecedented rate of deployment for a complex space system — and reflects SpaceX’s commitment to increase broadband accessibility around the world with Starlink as soon as feasible.
          </div>

          <div className='showcase-d'>
          The reliability of the satellite network is currently higher than 99% following the deployment of over 2,000 satellites, where only 1% have failed after orbit raising. We de-orbit satellites that are at risk of becoming non-maneuverable to prevent dead satellites from accumulating in orbit. Although this comes at the cost of losing otherwise healthy satellites, we believe this proactive approach is the right thing for space sustainability and safety.
          </div>
          <div className='showcase-d'>
          Our satellites use multiple strategies to prevent debris generation in space: design for demise, controlled deorbit to low altitudes, low orbit insertion, low operating orbit, on-board collision avoidance system, reducing the chance small debris will damage the satellite with a low profile satellite chassis and using <span className='d-primary'>
            Whipple shields
            </span>  to protect the key components, reducing risk of explosion with extensive battery pack protection, and failure modes that do not create secondary debris.
          </div>
          <div className='showcase-d'>
          SpaceX satellites are propulsively deorbited within weeks of their end-of-mission-life. We reserve enough propellant to deorbit from our operational altitude, and it takes roughly 4 weeks to deorbit. Once the satellites reach an appropriate altitude, we coordinate with the 18th Space Control Squadron. Once coordinated, we initiate a high drag mode, causing the satellite’s velocity to reduce sufficiently that the satellite deorbits. The satellites deorbit quickly from this altitude, depending on atmospheric density. SpaceX is the only commercial operator to have developed expertise in flying in a controlled way in this low altitude, high drag environment, which is incredibly difficult and required a significant investment in specialized satellite engineering. SpaceX made these investments so that we can maintain controlled flight as long as possible prior to deorbit, providing us with the ability to perform any necessary maneuvers to further reduce collision risk.
          </div>
          <div className='showcase-d'>
          When a satellite’s altitude decays, it encounters a constantly increasing atmospheric density. Initially, these molecules impact the satellite, but as the air density increases, a high-pressure shock wave forms in front of the spacecraft. As the satellite slows down and descends into the atmosphere, its orbital energy is transferred into the air, heating it to a plasma. The hot plasma sheath envelops the satellite, causing intense heating. Starlink satellites are designed to demise as they reenter the Earth’s atmosphere, meaning they pose no risk to people or property on the ground. Design for demise required the investment of significant engineering resources and often required adding cost and even mass to our satellites, such as our decision to use aluminum rather than composite overwrap pressure vessels for the fuel tank for our propulsion system. SpaceX has safely deorbited over 200 satellites utilizing this approach. By building reliable, debris minimizing satellites, planning for active deorbit and designing for full demisability, we ensure we’re keeping space sustainable and safe.
          </div>
          <div className='showcase-t'>
          EXTREMELY LOW ORBIT INSERTION
          </div>
          <div className='showcase-d'>
          In addition to SpaceX designing and building very reliable satellites, we further mitigate risks by deploying the satellites into extremely low orbits relative to industry standards. We deploy our satellites into low altitudes &lt; 350 km and use our state-of-the-art electric propulsion thruster to boost the satellites to the operational altitude of approximately 550 km to start their mission. We leverage SpaceX’s technical advancements to maintain controlled flight at these low altitudes. By deploying the satellites into such low altitudes, in the rare case where any SpaceX satellite does not pass initial system checkouts, it is quickly and actively deorbited using its thruster or passively by atmospheric drag. This approach is not without complexity or other challenges. This was best evidenced by the recent February 3rd Starlink launch, after which <span className='d-primary'>
          increased drag from a geomagnetic storm resulted in the premature deorbit of 38 satellites
            </span> . Despite such challenges, SpaceX firmly believes that a low insertion altitude is key for ensuring responsible space operations.
          </div>

          <div className='showcase-t'>
          OPERATING BELOW 600 KM
          </div>
          <div className='showcase-d'>
          SpaceX operates its satellites at an altitude below 600 km because of the reduced natural orbit decay time relative to those above 600 km. Starlink operates in "self-cleaning" orbits, meaning that non-maneuverable satellites and debris will lose altitude and deorbit due to atmospheric drag within 5 to 6 years, and often sooner, see Fig. 1. This greatly reduces the risk of persistent orbital debris, and vastly exceeds the FCC and international standard of 25 years (which we believe is outdated and should be reduced). Natural deorbit from altitudes higher than 600 km poses significantly higher orbital debris risk for many years at all lower orbital altitudes as the satellite or debris deorbits. Several other commercial satellite constellations are designed to operate above 1,000 km, where it requires hundreds of years for spacecraft to naturally deorbit if they fail prior to deorbit or are not deorbited by active debris removal, as in Fig. 1. SpaceX invested considerable effort and expense in developing satellites that would fly at these lower altitudes, including investment in sophisticated attitude and propulsion systems. SpaceX is hopeful active debris removal technology will be developed in the near term, but this technology does not currently exist.
          </div>
          <img src='./images/update/update3.png' className='showcase-graph' />
          <div className='image-name'>
          Fig. 1: Orbital lifetime for a satellite with a mass-to-area ratio of 40kg/m2 at various starting altitudes and average solar cycle.
          </div>
          <div className='showcase-d'>
          Fig. 2 shows debris as a function of each altitude. The debris generated from collision events from satellites flying at altitudes above 600km will stay in orbit for decades to come and create orbital debris risk for each altitude they pass through as they deorbit.
          </div>
          <img src='./images/update/update4.png'  className='showcase-graph' />
          <div className='image-name'>
          Fig. 2: Debris per 1-km altitude shell as a function of orbital altitude.
          </div>
          <div className='showcase-t'>
          TRANSPARENCY AND DATA SHARING
          </div>
          <div className='showcase-d'>
          SpaceX transparently and continuously shares the details of our Starlink network both with governments and other satellite owners/operators. We work to ensure accurate, relevant, and up-to-date information related to space safety, and space situational awareness is shared with all operators. SpaceX shares high fidelity future position and velocity prediction data (ephemerides) for all SpaceX satellites.
          </div>
          <div className='showcase-d'>
          SpaceX shares both propagated ephemerides and covariance (statistical uncertainty of the predictions) data on Space-Track.org and encourages all other operators to do so, as this enables more meaningful and accurate computation of collision risks. SpaceX is also working to make it even easier for anyone to access our ephemerides by eliminating any requirement to login to Space-Track.org to see our data.
          </div>
          <div className='showcase-d'>
          In addition to providing our satellite ephemerides, SpaceX volunteered to provide routine system health reports to the Federal Communications Commission ("FCC"), something no other operator has ever offered or currently does. These reports indicate the status of our constellation, including a summary of the operational status of our satellite fleet, and the number of maneuvers performed to reduce the collision probability with other objects. Fig. 3 is a sample of the number of maneuvers Starlink has done over the 6-month period from June 2021 through November 2021.
          </div>
          <img src='./images/update/update5.png' className='showcase-graph' />
          <div className='image-name'>
          Fig. 3: Number of SpaceX maneuvers from July-Dec 2021 (total was 3300)
          </div>
          <div className='showcase-t'>
          COLLISION AVOIDANCE SYSTEM
          </div>
          <div className='showcase-d'>
          SpaceX has high fidelity location and prediction data for our satellites from deployment through end-of-life disposal, and we share this information continuously with the U.S. Space Force, LeoLabs and other operators for tracking and collision avoidance screening. SpaceX satellites regularly downlink accurate orbital information from onboard GPS. We use this orbital information, combined with planned maneuvers, to accurately predict future ephemerides, which are uploaded to Space-Track.org three times per day. LeoLabs downloads our ephemerides from Space-Track.org and along with the U.S. Space Force's 18th Space Control Squadron screens these trajectories against other satellites and debris to predict any potential conjunctions. Such conjunctions are communicated back to SpaceX and other satellite owners/operators as Conjunction Data Messages (CDMs), which include satellite state vectors, position uncertainties, maneuverability status, and the owner/operator information. SpaceX uploads these CDMs to applicable SpaceX satellites.
          </div>
          <div className='showcase-d'>
          To accomplish safe space operations in a scalable way, SpaceX has developed and equipped every SpaceX satellite with an onboard, autonomous collision avoidance system that ensures it can maneuver to avoid potential collisions with other objects. If there is a greater than 1/100,000 probability of collision (10x lower than the industry standard of 1/10,000) for a conjunction, satellites will plan avoidance maneuvers. When planning a maneuver for any conjunction, the satellites take care to avoid inadvertently increasing risk for other conjunctions above the same threshold.
          </div>
          <div className='showcase-d'>
          By default, Starlink satellites assume maneuver responsibility for all conjunction events. Upon receipt of a high-probability conjunction with another maneuverable satellite, SpaceX coordinates with the other operator. SpaceX operators are on-call 24/7 to coordinate and respond to inquiries from other operators; contact information for high-urgency requests is available to other operators via Space-Track.org. If the other operator prefers to take maneuver responsibility themselves, Starlink satellites can be commanded to not maneuver for an event.
          </div>
          <div className='showcase-d'>
          In addition to collision avoidance maneuvers, Starlink satellites can autonomously “duck” for conjunctions, orienting their attitude to have the smallest possible cross-section (like the edge of a sheet of paper) in the direction of the potential conjunction, reducing collision probability by another 4-10x (see Fig. 4).
          </div>
          <img src='./images/update/update6.png' className='showcase-graph' />
          <div className='image-name'>
          Fig. 4: SpaceX’s “duck” maneuver (right) minimizing area in potential collision direction (out of page) compared with worst-case orientation (left)
          </div>
          <div className='showcase-d'>
          SpaceX’s collision avoidance system has been thoroughly reviewed by NASA’s Conjunction Assessment and Risk Analysis (CARA) program under a Space Act Agreement (SAA) with NASA, and per the SAA, NASA relies on it to avoid collisions with NASA science spacecraft.
          </div>
          <div className='showcase-d'>
          SpaceX satellites’ flight paths are designed to avoid inhabited space stations like the International Space Station (ISS) and the Chinese Space Station Tiangong by a wide margin. We work directly with NASA and receive ISS maneuver plans to stay clear of their current and planned trajectory including burns. China does not publish planned maneuvers, but we still make every effort to avoid their station with ISS-equivalent clearance based on publicly available ephemerides.
          </div>
          <div className='showcase-d'>
          SpaceX is proud of our sophisticated and constantly improving design, test, and operational approach to improve space sustainability and safety, which are critical towards accelerating space exploration while bringing Internet connectivity to the globe. We urge all satellite owner/operators to make similar investments in sustainability and safety and make their operations transparent. We encourage all owner/operators to generate high quality propagated ephemeris and covariance for screening by the 18th Space Control Squadron and to openly share this information with others to maximize coordination to ensure a sustainable and safe space environment for the future. Ultimately, space sustainability is a technical challenge that can be effectively managed with the appropriate assessment of risk, the exchange of information, and the proper implementation of technology and operational controls. Together we can ensure that space is available for humanity to use and explore for generations to come.
          </div>

          <div className='divider' />
          <img src='./images/update/update7.jpg' className='showcase-image' />
          <div className='showcase-date'>
          FEBRUARY 14, 2022
          </div>
          <div className='showcase-shadowed'>
          SPACEX TO LAUNCH POLARIS PROGRAM MISSIONS
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            Jared Isaacman, founder and CEO of Shift4 who commanded the Inspiration4 mission, announced today the Polaris Program, a first-of-its-kind effort to rapidly advance human spaceflight capabilities, while continuing to raise funds and awareness for important causes here on Earth. The program will consist of up to three human spaceflight missions that will demonstrate new technologies, conduct extensive research, and ultimately culminate in the first flight of SpaceX’s Starship with humans on board.
            </div>
            <div className='showcase-d'>
            The first mission, Polaris Dawn, is targeted to launch no earlier than the fourth quarter of 2022 from historic Launch Complex 39A at NASA’s Kennedy Space Center in Florida. This Dragon mission will take advantage of Falcon 9 and Dragon’s maximum performance, flying higher than any Dragon mission to date and endeavoring to reach the highest Earth orbit ever flown. Dragon and the Polaris Dawn crew will spend up to five days in orbit, during which the crew will attempt the first-ever commercial spacewalk, conduct scientific research designed to advance both human health on Earth and our understanding of human health during future long-duration spaceflights, and be the first crew to test Starlink laser-based communications in space, providing valuable data for future space communications systems necessary for missions to the Moon, Mars, and beyond.
            </div>
            <div className='showcase-d'>
            The Polaris Dawn mission has many first-time objectives, so the Polaris Program chose a crew of experts who know each other well and have a foundation of trust they can build upon as they undergo the challenges of this mission. In addition to Isaacman, the crew includes Scott “Kidd” Poteet, a veteran member of Jared’s team, and two SpaceX employees, Sarah Gillis and Anna Menon.
            </div>
          </div>
          
          <div className='divider' />
          <img src='./images/update/update8.jpg' className='showcase-image' />
          <div className='showcase-date'>
          FEBRUARY 8, 2022
          </div>
          <div className='showcase-shadowed'>
          GEOMAGNETIC STORM AND RECENTLY DEPLOYED STARLINK SATELLITES
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            On Thursday, February 3 at 1:13 p.m. EST, Falcon 9 launched 49 Starlink satellites to low Earth orbit from Launch Complex 39A (LC-39A) at Kennedy Space Center in Florida. Falcon 9’s second stage deployed the satellites into their intended orbit, with a perigee of approximately 210 kilometers above Earth, and each satellite achieved controlled flight.
            </div>
            <div className='showcase-d'>
            SpaceX deploys its satellites into these lower orbits so that in the very rare case any satellite does not pass initial system checkouts it will quickly be deorbited by atmospheric drag. While the low deployment altitude requires more capable satellites at a considerable cost to us, it’s the right thing to do to maintain a sustainable space environment.
            </div>
            <div className='showcase-d'>
            Unfortunately, the satellites deployed on Thursday were significantly impacted by a geomagnetic storm on Friday. These storms cause the atmosphere to warm and atmospheric density at our low deployment altitudes to increase. In fact, onboard GPS suggests the escalation speed and severity of the storm caused atmospheric drag to increase up to 50 percent higher than during previous launches. The Starlink team commanded the satellites into a safe-mode where they would fly edge-on (like a sheet of paper) to minimize drag—to effectively “take cover from the storm”—and continued to work closely with the Space Force’s 18th Space Control Squadron and LeoLabs to provide updates on the satellites based on ground radars.
            </div>
            <div className='showcase-d'>
            Preliminary analysis show the increased drag at the low altitudes prevented the satellites from leaving safe-mode to begin orbit raising maneuvers, and up to 40 of the satellites will reenter or already have reentered the Earth’s atmosphere. The deorbiting satellites pose zero collision risk with other satellites and by design demise upon atmospheric reentry—meaning no orbital debris is created and no satellite parts hit the ground. This unique situation demonstrates the great lengths the Starlink team has gone to ensure the system is on the leading edge of on-orbit debris mitigation.
            </div>
          </div>

          <div className='divider' />
          <img src='./images/update/update9.webp' className='showcase-image' />
          <div className='showcase-date'>
          NOVEMBER 23, 2021
          </div>
          <div className='showcase-shadowed'>
          DART MISSION
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            On Tuesday, November 23 at 10:21 p.m. PST, Falcon 9 launched NASA’s Double Asteroid Redirection Test (DART) mission to an interplanetary transfer orbit from Space Launch Complex 4 East (SLC-4E) at Vandenberg Space Force Base in California. DART is humanity’s first planetary defense test mission to see if intentionally crashing a spacecraft into an asteroid is an effective way to change its course, should an Earth-threatening asteroid be discovered in the future. This was SpaceX’s first inter-planetary mission.
            </div>
            <div className='showcase-d'>
            This was the third flight for this Falcon 9’s first stage booster, which previously supported launch of Sentinel-6 Michael Freilich and a Starlink mission.
            </div>
          </div>

          <div className='divider' />
          <img src='./images/update/DART.webp' className='showcase-image' />
          <div className='showcase-date'>
          NOVEMBER 11, 2021
          </div>
          <div className='showcase-shadowed'>
          CREW-3 MISSION
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            On Thursday, November 11 at 6:32 p.m. EST, 23:32 UTC, SpaceX’s Dragon autonomously docked with the International Space Station. Falcon 9 launched the spacecraft to orbit from histsoric Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida on Wednesday, November 10 at 9:03 p.m. EST.
            </div>
            <div className='showcase-d'>
            On Thursday, November 11 at 6:32 p.m. EST, 23:32 UTC, SpaceX’s Dragon autonomously docked with the International Space Station. Falcon 9 launched the spacecraft to orbit from histsoric Launch Complex 39A (LC-39A) at NASA’s Kennedy Space Center in Florida on Wednesday, November 10 at 9:03 p.m. EST.
            </div>
          </div>

          <div className='divider' />
          <img src='./images/update/crew-2.jpeg' className='showcase-image' />
          <div className='showcase-date'>
          NOVEMBER 8, 2021
          </div>
          <div className='showcase-shadowed'>
          CREW-2 MISSION
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            After 199 days in space, the longest-duration mission for a U.S. spacecraft, Dragon and the Crew-2 astronauts, Shane Kimbrough , Megan McArthur , Akihiko Hoshide , and Thomas Pesquet , returned to Earth, splashing down off the coast of Pensacola, Florida at 10:33 p.m. EST on November 8.
            </div>
            <div className='showcase-d'>
            Dragon and the Crew-2 astronauts were quickly recovered by the SpaceX recovery team. SpaceX will transport Dragon back to Cape Canaveral, Florida for inspections and refurbishment ahead of future human spaceflight missions.
            </div>
            <div className='showcase-d'>
            This mission marked multiple firsts for SpaceX and NASA’s Commercial Crew Program, including being the first to fly two international partners, the first crew mission to use a flight-proven Dragon and Falcon 9, and the first U.S. spacecraft to spend 199 consecutive days in orbit.
            </div>
          </div>

          <div className='divider' />
          <img src='./images/update/inspiration4.jpg' className='showcase-image' />
          <div className='showcase-date'>
          SEPTEMBER 18, 2021
          </div>
          <div className='showcase-shadowed'>
          INSPIRATION4 MISSION
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            After three days orbiting Earth, Dragon and the Inspiration4 crew – the world’s first civilian mission to orbit – safely splashed down off the coast of Florida at 7:06 p.m. EDT on Saturday, September 18, 2021, completing their first multi-day low Earth orbit mission.
            </div>
            <div className='showcase-d'>
            Dragon performed a series of departure phasing burns to leave the circular orbit of 575 kilometers and then jettisoned its trunk ahead of its deorbit burn. After re-entering the Earth’s atmosphere, the spacecraft deployed its two drogue and four main parachutes in preparation for the soft water landing.
            </div>
            <div className='showcase-d'>
            Inspiration4 is commanded by Jared Isaacman, founder and CEO of Shift4 Payments and an accomplished pilot and adventurer. Joining him are Medical Officer Hayley Arceneaux, a physician assistant at St. Jude Children’s Research Hospital® and pediatric cancer survivor; Mission Specialist Chris Sembroski, an Air Force veteran and aerospace data engineer; and Mission Pilot Dr. Sian Proctor, a geoscientist, entrepreneur, and trained pilot.
            </div>
          </div>

          <div className='divider' />
          <img src='./images/update/axiom-mission.jpg' className='showcase-image' />
          <div className='showcase-date'>
          JUNE 2, 2021
          </div>
          <div className='showcase-shadowed'>
          SPACEX TO LAUNCH FOUR AXIOM MISSIONS TO ISS
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            Developed by SpaceX to support NASA’s Commercial Crew Program, Dragon helped return human spaceflight capabilities in 2020 and has successfully flown three human spaceflight missions to the International Space Station (ISS) to-date. In addition to flying astronauts to space for NASA, Dragon can also carry commercial astronauts to Earth orbit, the ISS or beyond.
            </div>
            <div className='showcase-d'>
            Today, Axiom Space announced SpaceX will fly three additional private crew missions aboard Dragon to and from the Station through 2023. Axiom previously announced their first mission to the International Space Station flying aboard Dragon, currently targeted to liftoff no earlier than January 2022. In May 2021, Axiom announced that astronaut Peggy Whitson and champion GT racer John Shoffner will serve as commander and pilot on the Ax-2 mission .
            </div>
            <div className='showcase-d'>
            All four crews will receive combined commercial astronaut training from NASA and SpaceX, with SpaceX providing training on the Falcon 9 launch vehicle and Dragon spacecraft, emergency preparedness training, spacesuit and spacecraft ingress and egress exercises, as well as partial and full simulations.
            </div>
            <div className='showcase-d'>
            The growing partnership between Axiom and SpaceX will enable more opportunities for more humans in space on the road to making humanity multiplanetary.
            </div>
          </div>

          <div className='divider' />
          <img src='./images/update/sn15.webp' className='showcase-image' />
          <div className='showcase-date'>
          MAY 5, 2021
          </div>
          <div className='showcase-shadowed'>
          STARSHIP SN15
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
            On Wednesday, May 5, Starship serial number 15 (SN15) successfully completed SpaceX’s fifth high-altitude flight test of a Starship prototype from Starbase in Texas.
            </div>
            <div className='showcase-d'>
            Similar to previous high-altitude flight tests of Starship , SN15 was powered through ascent by three Raptor engines, each shutting down in sequence prior to the vehicle reaching apogee – approximately 10 km in altitude. SN15 performed a propellant transition to the internal header tanks, which hold landing propellant, before reorienting itself for reentry and a controlled aerodynamic descent.
            </div>
            <div className='showcase-d'>
            The Starship prototype descended under active aerodynamic control, accomplished by independent movement of two forward and two aft flaps on the vehicle. All four flaps were actuated by an onboard flight computer to control Starship’s attitude during flight and enabled precise landing at the intended location. SN15’s Raptor engines reignited as the vehicle performed the landing flip maneuver immediately before touching down for a nominal landing on the pad.
            </div>
            <div className='showcase-d'>
            These test flights of Starship are all about improving our understanding and development of a fully reusable transportation system designed to carry both crew and cargo on long-duration interplanetary flights, and help humanity return to the Moon, and travel to Mars and beyond.
            </div>
            <div className='showcase-d'>
            Congratulations to the entire SpaceX team on SN15’s successful flight and landing!
            </div>
          </div>
          <div className='divider' />

          {/* Take copy */}
          {/* <div className='divider' />
          <img src='./images/update/update8.jpg' className='showcase-image' />
          <div className='showcase-date'>
          FEBRUARY 8, 2022
          </div>
          <div className='showcase-shadowed'>
          GEOMAGNETIC STORM AND RECENTLY DEPLOYED STARLINK SATELLITES
          </div>
          <div className='showcase-description'>
            <div className='showcase-d'>
              
            </div>
          </div> */}
          {/* Write above */}
        </div>
        
      </div>
    </div>
  )
}

export default StarshipUpdate