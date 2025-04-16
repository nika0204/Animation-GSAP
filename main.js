

  const title = document.querySelector(".hero-title");
  const letters = title.textContent.split("");
  title.textContent = "";
  
  letters.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;
    title.appendChild(span);
    gsap.from(span, {
      opacity: 1,
      y: -30,
      delay: i * 0.07,
      duration: 3,
      color: gsap.utils.random(['#7C00FE', '#F9E400', '#FFAF00', '#F5004F']),
    });
  });


 




  gsap.from("h4", {opacity: 0, y: 30, delay: 1.5, duration: 1});
  gsap.from("a", {
    opacity: 0,
    delay: 2,
    duration: 2,
    ease: "elastic.out(1, 0.4)"
  });


  gsap.to(".blob1", {

    x: 100,
    y: -50,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(".blob2", {
    x: 80,
    y: 50,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(".blob3", {
    x: 150,
    y: -50,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  gsap.to(".blob4", {
    x: 300,
    y: -250,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".second-text", {
    scrollTrigger: {
      trigger: ".second-wrrap",
      start: "top 80%", 
      toggleActions: "restart pause resume none"
    },
    opacity: 0,
    y: 30,
    duration: 5,
    stagger: 1, 
    ease: "power3.out"
  });
  


 gsap.to(".decor", {
  x:50,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });


 





             
        
