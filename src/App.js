import CommandPalette from "./Components/CommandPalette";

function App() {

    const users = [{
        "id": 1,
        "first_name": "Isak",
        "last_name": "Ciraldo",
        "email": "iciraldo0@google.co.uk",
        "gender": "Male",
        "ip_address": "12.179.12.212"
    }, {
        "id": 2,
        "first_name": "Beulah",
        "last_name": "Leftley",
        "email": "bleftley1@gnu.org",
        "gender": "Genderfluid",
        "ip_address": "125.251.168.42"
    }, {
        "id": 3,
        "first_name": "Jackson",
        "last_name": "Radnage",
        "email": "jradnage2@wikia.com",
        "gender": "Male",
        "ip_address": "191.83.125.76"
    }, {
        "id": 4,
        "first_name": "Corine",
        "last_name": "Butland",
        "email": "cbutland3@flavors.me",
        "gender": "Female",
        "ip_address": "2.157.78.132"
    }, {
        "id": 5,
        "first_name": "Henriette",
        "last_name": "Dand",
        "email": "hdand4@ovh.net",
        "gender": "Female",
        "ip_address": "82.62.163.77"
    }, {
        "id": 6,
        "first_name": "Olive",
        "last_name": "Verheijden",
        "email": "overheijden5@weather.com",
        "gender": "Female",
        "ip_address": "217.171.1.17"
    }, {
        "id": 7,
        "first_name": "Ange",
        "last_name": "Goodlett",
        "email": "agoodlett6@addtoany.com",
        "gender": "Female",
        "ip_address": "183.121.65.149"
    }, {
        "id": 8,
        "first_name": "Kenon",
        "last_name": "Gregon",
        "email": "kgregon7@admin.ch",
        "gender": "Male",
        "ip_address": "187.60.99.95"
    }, {
        "id": 9,
        "first_name": "Keelby",
        "last_name": "Mara",
        "email": "kmara8@cnn.com",
        "gender": "Male",
        "ip_address": "192.70.23.229"
    }, {
        "id": 10,
        "first_name": "Matthias",
        "last_name": "Abadam",
        "email": "mabadam9@nih.gov",
        "gender": "Male",
        "ip_address": "206.5.89.21"
    }, {
        "id": 11,
        "first_name": "Grove",
        "last_name": "Huddlestone",
        "email": "ghuddlestonea@posterous.com",
        "gender": "Polygender",
        "ip_address": "7.145.240.170"
    }, {
        "id": 12,
        "first_name": "Sherri",
        "last_name": "Chidlow",
        "email": "schidlowb@yellowbook.com",
        "gender": "Female",
        "ip_address": "113.47.1.85"
    }];
    return (
        <div className="app flex justify-center items-center">
            <CommandPalette users={users}  />
            <div className="bg-white max-w-lg mx-auto rounded-lg shadow-2xl p-4 border-1 border-gray-500/75 text-gray-900">
                Press cmd + k to open command palette
            </div>
        </div>
    );
}

export default App;
