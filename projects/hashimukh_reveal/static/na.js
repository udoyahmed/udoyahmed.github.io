

let refs = [
    "Zinia Afrin Mow",
    "Robiul Hasan Prantique",
    "Shahariar Nerov",
    "Farhan Ishrak",
    "Saad Ibn Muhammad",
    "Hasan Al Banna",
    "Kishor Das",
    "H M Mofizul Islam",
    "Afsana Aroby",
    "Touhid Islam",
    "Imran Rahman",
    "Hasan AL Banna",
    "Nabil Alam Khan Ratul",
    "Adibul Islam",
    "Tasif Anwar",
    "Af naf shahriar",
    "Fouzia Fariha",
    "মোঃ সাফওয়ান ইবনে হুমায়ুন",
    "Sazzad Hossain Shawon",
    "Mehedi Shaikh",
    "Borhan Uddin Nishan",
    "Fahim",
    "Jarin Subah",
    "Mubashwirul Bari Rafin",
    "Nafis Rubayet",
    "Fida Nuzhat Huda",
    "Imran Abid",
    "Md. Halim Islam",
    "Shatadru Ghosh Arko",
    "Rifatul Alam Siam ",
    "Zunaid Hasan",
    "K.M. Mahin Ahmed",
    "Arafat Islam Sunny",
    "Somneel Datta",
    "Mahadi Hasan Emon",
    "Arnab Sikder",
    "Tanvir Ahmed Abir",
    "Salahuddin Ahmed",
    "S M Shahariar",
    "MD Arif Hasan Sabbir",
    "GB Gaurob Biswas",
    "Fahim Ahmed Shuvo",
    "Farhan Shahriar Arik",
    "Shah Jawadul Islam Alvi",
    "Kakuli Rani",
    "Mahmudul Hasan Jayed",
    "Safkat Mahmud",
    "Saria Tasnin Aboni",
    "Sampad Kumar Saha"
]


$(".btn").on("click", async () => {
    await $(".btn").remove();

    
    const timeoutPromises = [];

    for (let i = 0; i < refs.length; i++) {
        timeoutPromises.push(new Promise(resolve => {
            setTimeout(() => {
                $(".array > ol").append(`<li><h3>${i + 1}. ${refs[i]}</h3></li>`);
                resolve(); 
            }, 100 * i);
        }));
    }
    await Promise.all(timeoutPromises);
    $(".final").html(`<h2>Congrats! You refered ${refs.length} people. But is it higher than the other two?</h2>
        <a href="../reveal.html"><button type="button" class="btn btn-outline-secondary btn-lg">Go Back</button></a>`);
});