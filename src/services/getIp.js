// Lo comento temporalmente para no acabarme las oportunidades solo tengo 500 al día
const getIp = async () => {
    const dataCollect = await fetch("https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com",
		"x-rapidapi-key": "2fec852d02msh51f325914c4a5c6p1275eejsn16368bd3f42d"
	}})
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });
    return dataCollect;
}

export { getIp };