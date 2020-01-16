//Ako je kod ovako poslozen, onda ce dva puta ispisati Jennefer jer ako ne pronade def var ni u jednom scopu,
// onda ju sam napravi globalno i zato ju i drugi con.log ispise
//let name = 'Tomislav'

if (true) {
    //let name = 'Mike'
    if (true) {
       name = 'Janefer'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}