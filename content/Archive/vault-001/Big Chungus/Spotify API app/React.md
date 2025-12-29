<mark class="hltr-cyan">09 02 Th</mark>

Look up what <mark class="hltr-purple">breadcrumbs</mark> are 
<mark class="hltr-purple">Emmet</mark> shorthand tutorial
<mark class="hltr-purple">Adding dependency</mark> to React <mark class="hltr-purple">useState</mark> for example in active range in TopArtists.js

-----
<mark class="hltr-cyan">10 02 Fr</mark>


return (
        <div>
            {/* This is a test to see if top tracks works */}
            <main>
                {/* Main for padding */}
                <SectionWrapper title="Top Tracks" breadcrumb={true}>
                    <TimeRangeButtons
                        activeRange={activeRange}
                        setActiveRange={setActiveRange}
                    />
                    {/* Not sure how this syntax works */}
                    {topTracks && topTracks.items && (
                    <TrackList tracks={topTracks.items} />
                    )}
                </SectionWrapper>
            </main>
        </div>
    )
   
   


