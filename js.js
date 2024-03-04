const url = 'https://github.com/panosst/events/blob/main/events.json'
async function getData() {
    const r = await fetch(url)
    const events = await r.json()
    console.log(events)
    
}