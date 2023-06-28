        window.onload = function () {

            let a = document.getElementById("image");

            let movies = [
                {
                    "img": "poster/f9.jpg",
                    "video": "videos/f9.mp4",
                    "name": "fast 9",
                    "type": ["racing", "action", "(2021)"],
                    "actor": ["Vin Diesel", "Michelle"]
                },
                {
                    "img": "poster/kgf2.jpeg",
                    "video": "videos/kgf2.mp4",
                    "name": "kgf chapter2",
                    "type": ["action", "crime", "(2020)"],
                    "actor": ["yash", "Srinidhi Shetty"]
                },
                {
                    "img": "poster/endgame.jpeg",
                    "video": "videos/Endgame.mp4",
                    "name": "Avangers endgame",
                    "type": ["war", "(2019)"],
                    "actor": ["Robert Downey", "Scarlett"]
                },
                {
                    "img": "poster/sisu.jpg",
                    "video": "videos/sisu.mp4",
                    "name": "Sisu",
                    "type": ["action", "thriler", "(2023)"],
                    "actor": ["Jorma ", "Mimosa Willamo"]
                },
                {
                    "img": "poster/5.jpg",
                    "video": "videos/Money Heist.mp4",
                    "name": "Money Heist 4",
                    "type": ["criome", "(2020)"],
                    "actor": ["Sergio", "Úrsula Corberó"]
                },
                {
                    "img": "poster/6.jpg",
                    "video": "videos/Bang Bang.mp4",
                    "name": "Bang Bang",
                    "type": ["romance", "(2014)"],
                    "actor": ["hritik roshan", "katrina kaif"]
                },
                {
                    "img": "poster/7.jpg",
                    "video": "videos/The vault.mp4",
                    "name": "The Vault",
                    "type": ["war", "(2021)"],
                    "actor": ["Alfred Highmore", "Àstrid"]
                },
                {
                    "img": "poster/8.jpg",
                    "video": "videos/Pirates of the caribbean.mp4",
                    "name": "Pirates Caribbean",
                    "type": ["action", "thriler", "(2023)"],
                    "actor": ["Johnny Depp", "Keira Knightley"]
                },
                {
                    "img": "poster/9.jpg",
                    "video": "videos/Ant Man.mp4",
                    "name": "Ant Man3",
                    "type": ["war", ("2023")],
                    "actor": ["Paul Rudd", "Evangeline Lilly"]
                },
                {
                    "img": "poster/10.jpg",
                    "video": "videos/citadel.mp4",
                    "name": "Parker",
                    "type": ["action", "crime", "(2013)"],
                    "actor": ["Jason Statham", "Jennifer Lopez"]
                },
                {
                    "img": "poster/pathan.jpg",
                    "video": "videos/Pathaan.mp4",
                    "name": "Pathan",
                    "type": ["action", "(2023)"],
                    "actor": ["srk", "deepika padukone"]
                },
                {
                    "img": "poster/12.jpg",
                    "video": "videos/The Kerala Story.mp4",
                    "name": "Kerala Story",
                    "type": ["thriler", "crime", "(2023)"],
                    "actor": ["Yogita Bihani", "Sonia Balani"]
                },
                {
                    "img": "poster/13.jpg",
                    "video": "videos/Doctor Strange.mp4",
                    "name": "Doctor Strange",
                    "type": ["action", "(2016)"],
                    "actor": ["Benedict", "Rachel McAdams"]
                },
                {
                    "img": "poster/14.jpg",
                    "video": "videos/Hacked.mp4",
                    "name": "Hacked",
                    "type": ["crime", "science", "2020"],
                    "actor": ["rohan shah", "Hina khan"]
                },
                {
                    "img": "poster/pushpa.jpg",
                    "video": "videos/Pushpa.mp4",
                    "name": "Pushpa",
                    "type": ["action", "crime", (2021)],
                    "actor": ["Allu Arjun", "Rashmika"]
                },
                {
                    "img": "poster/16.jpg",
                    "video": "videos/citadel.mp4",
                    "name": "Citadel",
                    "type": ["action", "romance", "(2023)"],
                    "actor": ["Richard", "Deepika Padukone"]
                },
                {
                    "img": "poster/fast x.jpg",
                    "video": "videos/Fast x.mp4",
                    "name": "fast X",
                    "type": ["racing", "action", "(2023)"],
                    "actor": ["Vin Diesel", "Michelle Rodriguez"]
                },
                {
                    "img": "poster/18.jpg",
                    "video": "videos/Red Rose.mp4",
                    "name": "Red Rose",
                    "type": ["horror", "thriler", "(2022)"],
                    "actor": ["Amelia Clarkson"]
                },
                {
                    "img": "poster/19.jpg",
                    "video": "videos/Bhediya.mp4",
                    "name": "Bhedia",
                    "type": ["action", "(2022)"],
                    "actor": ["Varun Dhawan", "Kriti Sanon"]
                },
                {
                    "img": "poster/thor.webp",
                    "video": "videos/Ant Man.mp4",
                    "name": "Thor",
                    "type": ["war", "(2011)"],
                    "actor": ["Chris Hemsworth", "Natalie"]
                }
            ];

            // search bar
            let textInputValue = ""
            const searchBar = document.getElementById("form-input-box")
            searchBar.addEventListener("submit", (e) => {
                e.preventDefault()
                e.stopPropagation()
                document.getElementById("no-image-found").style.display = "none"
                document.getElementById("image").style.display = "block"
                console.log(">>>>>>>>>>>>>>>>>>>>>>>", document.getElementById("search-input").value)
                let input = document.getElementById("search-input").value
                input = input.toLowerCase();
                let x = document.getElementsByClassName('animals');
                let movieLength = false
                for (i = 0; i < movies.length; i++) {
                    if (!movies[i].name.toLowerCase().includes(input)) {
                        console.log(movies[i])
                        console.log("aaaa", document.getElementById("imageContainer" + movies[i].name))
                        document.getElementById("imageContainer" + movies[i].name).style.display = "none"
                    }
                    else {
                        document.getElementById("imageContainer" + movies[i].name).style.display = "block"
                        movieLength = true
                    }
                    document.getElementById("no-image-found").style.display = "none"

                }
                if (!movieLength) {
                    console.log("NO MOvies are there")
                    document.getElementById("no-image-found").style.display = "block"
                    document.getElementById("image").style.display = "none"

                }
            })
            //    IMAGE LOOP
            movies.forEach((item, index) => {

                let parentDiv = document.createElement("div");
                parentDiv.id = "imageContainer" + item.name;
                parentDiv.setAttribute("class", "box");


                let imgNode = document.createElement("img");
                imgNode.src = item.img;
                imgNode.id = item.img + index;
                imgNode.setAttribute("class", "picture");

                // forvideo
                let videoParent = document.createElement("div")
                videoParent.style.display = "none";
                // videoParent.style.position="absolute"
                let videoNode = document.createElement("video");
                let sourceNode = document.createElement("source");
                videoNode.src = item.video;
                videoNode.type = "video/mp4";
                // videoNode.style.height = "139x"
                // videoNode.style.width = "243px"
                // videoNode.appendChild(sourceNode);
                videoParent.id = item.video + index;

                // heading name
                let videoHeading = document.createElement("h4")
                videoHeading.innerHTML = item?.name
                videoParent.append(videoHeading)
                videoParent.append(videoNode)
                parentDiv.appendChild(imgNode);
                parentDiv.appendChild(videoParent);
                a.appendChild(parentDiv);
                videoHeading.setAttribute("class", "videoHeading");

                // type name
                let typename = document.createElement("h6")
                typename.innerHTML = item?.type
                videoParent.append(typename)
                videoParent.append(videoNode)
                parentDiv.appendChild(imgNode);
                parentDiv.appendChild(videoParent);
                a.appendChild(parentDiv);
                typename.setAttribute("class", "type");

                // actors
                let actorname = document.createElement("h6")
                actorname.innerHTML = item?.actor
                videoParent.append(actorname)
                videoParent.append(videoNode)
                parentDiv.appendChild(imgNode);
                parentDiv.appendChild(videoParent);
                a.appendChild(parentDiv);
                actorname.setAttribute("class", "actor");


                let container = document.getElementById(parentDiv.id);
                container.addEventListener("mouseover", () => {
                    imgNode.style.display = "none";
                    videoParent.style.display = "block"
                    videoParent.className = "videoParentHover"
                    let playPromise = videoNode.play();
                    if (playPromise !== undefined) {
                        playPromise.catch((error) => {
                            console.log("Play error:", error);
                        });
                    }
                });
                container.addEventListener("mouseout", () => {
                    videoParent.className = "videoParentOnRemover"
                    imgNode.style.display = "block";
                    videoParent.style.display = "none"

                    videoNode.pause();
                    videoNode.currentTime = 0;
                });
                parentDiv.style.display = "block";
            });
        };