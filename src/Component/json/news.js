export default [
    {
        title: "Introducing Marketplace",
        thumbnail: "https://devequip.com/Resources/Blog/marketplacepreview.png",
        description: "Learn more about how and why we're introducing the new marketplace for Dev Equip's products. Learn more about how and why we're introducing the new marketplace for Dev Equip's products.",

        author: {
            image: "/imgs/donpfp.png",
            name: "Donavan",
            published: "Jan 23 2025",
            type: "Dev Preview"
        },

        content: [
            "# Official Marketplace",
            "As we expand the website, we're slowly turning it into the official hub for Dev Equip products. Our products will now be primarily obtained within the marketplace, and fitted with source/file formats. All files will remain as Roblox creator store assets with RBXM/RBXL until file formating arrives. We'll talk more about file formats later on.",

            "Additionally we're introducing our own review system for people willing to leave a review. These will only be available after accounts arrive and will have a chance to have your review hand-picked to be displayed on the landing page. ",

            "___",

            "# Discord Products Category",
            "We've already removed all products discontinued due to newer version such as:",
            "* Chat Plus +",
            "* Nexus Dynamics [Phase 1]",
            "* Donation Board [v1/v2]",

            "\nWhilst also removing products that need a rework for user-friendly reasons:",
            "* Proximity Prompt [v2]",
            "* Mini-Map",

            "Furthermore, we've removed all products that sit at the bottom of our statistics bin:",
            "* Various 3D Models",
            "* Various User Interfaces",
            "* All Luau Modules",

            "___",

            "# File Formats",
            "We're introducing more file formats per category when downloading for a more flexable workflow. For products that use scripts, we'll provide a source from github. All Roblox products listed below will be given unique formats:",
            "",
            "**Admin Panel**: Creator Store / RBXM",
            "",
            "**Donation Board**: Creator Store / RBXM",
            "",
            "**User Interface**: Creator Store / RBXM",
            "",
            "**Script**: Creator Store / RBXM / Lua",
            "",
            "**3D Model**: Creator Store / RBXM / FBX / Blend / OBJ",
            "",
            "**Map**: RBXL",
            "",
            "**Plugin**: Creator Store / RBXM",

            "___",

            "# Community Marketplace",
            "Although we're not anywhere near the start of development for the community marketplace, we're very enthusiastic about this idea for a community that shares resources between each other regardless of price.",
            "",
            "We'll share more information about this community marketplace once we start development."

        ].join("\n")
    },

    {
        title: "v3.25 | Donation Board Hotfix",
        thumbnail: "https://devequip.com/Resources/Blog/dbboard2.jpg",
        description: "Quick patch for invalid developer products along with some bug fixes regarding themes and rigs.",

        author: {
            image: "/imgs/donpfp.png",
            name: "Donavan",
            published: "Jan 4 2025",
            type: "Hotfix"
        },

        content: [
            "# Changes",
            "As we expand the website, we're slowly turning it into the official hub for Dev Equip products. Our products will now be primarily obtained within the marketplace, and fitted with source/file formats. All files will remain as Roblox creator store assets with RBXM/RBXL until file formating arrives. We'll talk more about file formats later on.",
            "* Developer products with an invalid ID will no longer be displayed.",

            "___",

            "# Fixes",
            "* Correctly configured the following themes:",
            "   * Dev Equip Theme",
            "   * Hacker Theme",
            "   * Custom Theme",
            "* Rigs will no longer disappear after theme failures.",
        ].join("\n")
    },

    {
        title: "Nexus Dynamics's Integration of TopbarPlus",
        thumbnail: "https://devequip.com/Resources/Blog/topbarThumbnail.png",
        description: "Developer of Nexus Dynamics releasing public information regarding Nexus Dynamics's integration of TopbarPlus.",

        author: {
            image: "/imgs/donpfp.png",
            name: "Donavan",
            published: "Dec 18 2024",
            type: "News"
        },

        content: [
            "# What is TopbarPlus?",
            "[TopbarPlus by @ForeverHD](https://devforum.roblox.com/t/v3-topbarplus-v300-construct-intuitive-topbar-icons-customise-them-with-themes-dropdowns-captions-labels-and-much-more) is a popular framework used to recreate the default Roblox in-game menus, which are always on the top of your screen and always in sight.",
            "",
            "TopbarPlus allows you to create your own custom buttons to align with Roblox menus so you can have a much cleaner and modern looking game. TopbarPlus automatically moves buttons around to align them unless they aren't made using TopbarPlus.",
            "",
            "![Topbar Thumbnail](https://devequip.com/Resources/Blog/TopbarIntegration.png)",
            "___",
            "# Integration of TopbarPlus to Nexus Dynamics",
            "We've made it so Nexus Dynamics will now detect whether your using TopbarPlus in your game. If you are, it'll instead create its topbar icon using TopbarPlus to align itself without overlappin any buttons.",
            "",
            "In settings, you'll get new options that'll give you selections of topbar alignment (left | center | right) alopng with some customization of the button itself.",
            "",
            "___",
            "# What if I don't use TopbarPlus?",
            "If you don't use TopbarPlus, Nexus Dynamics will create its own version of TopbarPlus UI for only the parts it needs. You'll still be able to align them to the corners or center and with Roblox Menus."
        ].join("\n")
    },

    {
        title: "Utilizing Ban API in Nexus Dynamics",
        thumbnail: "https://devequip.com/Resources/Blog/banCode.png",
        description: "Learn more about Roblox's Ban API and how Nexus Dynamics will to take full advantage of it.",

        author: {
            image: "/imgs/donpfp.png",
            name: "Donavan",
            published: "Dec 10 2024",
            type: "News"
        },

        content: [
            "# What is Roblox's Ban API",
            "Roblox has released a new Ban API with manyu capabilities ordinary scripts developed by Roblox developers can't manage with the given run context/permissions. These include the detection of alternative accounts (alts) and giving us the ability to use these API outside Roblox without requiring a running server. This feature was released shortly after Nexus Dynamics's final development phase; Therefore, we didn't have time to implement this system.",
            "___",
            "# Implementing Ban API into Roblox",
            "This has been our most requested feature for Nexus Dynamics and has gone through decision making to implement. We're still a little skeptical at the time of this post but we've been keeping an eyue on recent reports that fully utilize this new system without any problems. Therefore, we've decided to implement this into Nexus Dynamics v2.0.5.",
            "",
            "The new system will now give al ldevelopers the capability of managing Nexus Dynamics bans outside of the game and still be able to configure them in-game! In addition to this, we won't be wasting valuable memory on DataStoreService, assisting people that use global leaderboards with Nexus Dynamics in their experience.",
            "___",
            "# When should this be expected?",
            "The Ban API has already been developed and tested, marking it complete and ready for release. However, we're releasing it with version 2.0.5 due to the new framework we're implementing to increase performance.",
            "The exact release date for version 2.0.5 has not yet been decided; however, we've planned an approximate release date within Q2 of 2025.",
        ].join("\n")
    },
]