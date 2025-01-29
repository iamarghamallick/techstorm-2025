// all event categories with their respective event names
// eventNames should be the updated very carefully, no typo should be there
// format eventNames like this "Tech Hunt" => "techhunt"
// change to lower case and remove spaces or semi-colons in between (if any)
// put categoty names as the image or ion filenames, like brain-teasers.svg for Brain Teasers

export const events = [
    {
        id: 1,
        title: "Brain Teasers",
        icon: "/assets/events/icons/event1.svg",
        image: "/assets/events/BrainTeaser.jpg",
        eventCount: 2,
        eventNames: ["techhunt", "omegatrix"],
    },
    {
        id: 2,
        title: "Technicals",
        icon: "/assets/events/icons/event1.svg",
        image: "/assets/events/Technicals.jpg",
        eventCount: 3,
        eventNames: ["codebee", "hackstorm", "technomania"],
    },
    {
        id: 3,
        title: "Rovers",
        icon: "/assets/events/icons/event1.svg",
        image: "/assets/events/Rovers.jpg",
        eventCount: 5,
        eventNames: ["rocombat", "ronavigator", "rosoccer", "roterrance", "aquarace"],
    },
    {
        id: 4,
        title: "Games",
        icon: "/assets/events/icons/event1.svg",
        image: "/assets/events/Gaming.jpg",
        eventCount: 3,
        eventNames: ["efootball", "fifa", "khet"],
    },
    {
        id: 5,
        title: "Creative",
        icon: "/assets/events/icons/event1.svg",
        image: "/assets/events/Creative.jpg",
        eventCount: 2,
        eventNames: ["passionwithreels", "shutterfusion"],
    },
    {
        id: 6,
        title: "School Connect",
        icon: "/assets/events/icons/event1.svg",
        image: "/assets/events/SchoolConnect.png",
        eventCount: 3,
        eventNames: ["codebeejr", "technomaniajr", "hackstormjr"],
    },
];