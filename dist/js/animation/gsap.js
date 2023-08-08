
gsap.registerPlugin(ScrollTrigger);gsap.to('.welcome_text_content',{top:-50,opacity:0,scrollTrigger:{trigger:'.welcome',start:"top top",end:"50% top",scrub:true,}})
gsap.to('.welcome_img_content',{opacity:0,scrollTrigger:{trigger:'.welcome',start:"top top",end:"50% top",scrub:true,}})
gsap.from('.email_content',{right:-200,opacity:0,scrollTrigger:{trigger:'.email_content',start:"top bottom",end:"bottom bottom",scrub:true,}})