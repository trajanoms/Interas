const sr = ScrollReveal ({
    distance: '40px',
    duration: 2600,
    reset: true,
})

sr.reveal('.home-text', {delay:20, origin:'left'})
sr.reveal('.about, .sevices, .portfolio, .blog', {delay:100, origin:'bottom'})
