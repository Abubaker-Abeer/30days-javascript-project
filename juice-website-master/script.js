var tl = gsap.timeline({scrollTrigger:{
    trigger:".flavour",
    start:"0% 95%",
    end:"90% 10%",
    scrub:true,
  //  markers:true,
}})
tl
.to("#bottle-strawberry",{
    top:"175%",
    left:"26%",
    width:"18%"
},"one")
.to("#bottle-berry",{
    top:"172%",
    left:"-11%",
    width:"20%"
},"one")
.to("#bottle-mango",{
    top:"172%",
    left:"61%",
    width:"20%"
},"one")
.to("#mangoslice",{
    top:"189%",
    left:"60%",
    width:"8%"
},"one")
.to("#berry",{
    top:"189%",
    left:"-11%",
    width:"6%"
},"one")
.to("#strawberry",{
    top:"189%",
    left:"25%",
    width:"5%"
},"one")
.to("#berry2",{
    top:"120%",
    left:"95%",
    width:"15%",
    rotate:"55deg"
},"one")

var tl = gsap.timeline({scrollTrigger:{
    trigger:".fresh",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
  //  markers:true,
}})
tl
.to("#bottle-strawberry",{
    top:"215%",
    left:"44%",
    width:"50%"
},"two")
.to("#bottle-berry",{
    top:"215%",
    left:"38%",
    width:"45%"
},"two")
.to("#bottle-mango",{
    top:"217%",
    left:"54%",
    width:"45%"
},"two")
.to("#mangoslice",{
    top:"255%",
    left:"45%",
    width:"18%"
},"two")
.to("#berry",{
    top:"250%",
    left:"75%",
    width:"15%"
},"two")
.to("#strawberry",{
    top:"256%",
    left:"5%",
    width:"12%"
},"two")



var tl = gsap.timeline({scrollTrigger:{
    trigger:".favorites",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})
tl
.to("#bottle-strawberry",{
    top:"310%",
    left:"50%",
    width:"22%"
},"three")
.to("#bottle-berry",{
    top:"309%",
    left:"27%",
    width:"22%"
},"three")
.to("#bottle-mango",{
    top:"310%",
    left:"73%",
    width:"22%"
},"three")
.to("#strawberry",{
    top:"286%",
    left:"45%",
    width:"8%"
},"three")
