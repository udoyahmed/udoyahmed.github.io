

let refs = [
    "Ajmain Ajwad Jahin",
    "Md Shakibur Rahman Saikat",
    "Jeba Raisa",
    "Miraj hossen nur",
    "Md Abdulla",
    "Kiam",
    "Ahnaf Orko",
    "Nazifa Tasnim",
    "Sabnum Mustari",
    "Abid shahriar",
    "Rubaiya",
    "Mahim Hasan",
    "Sajidur Rahman Farhan",
    "Boni YEAMIN",
    "Md Tasaduzzaman Mahi",
    "Raghib Neehal Deepro"
]


$(".btn").on("click", async () => {
    await $(".btn").remove();

    
    const timeoutPromises = [];

    for (let i = 0; i < refs.length; i++) {
        timeoutPromises.push(new Promise(resolve => {
            setTimeout(() => {
                $(".array > ol").append(`<li><h3>${i + 1}. ${refs[i]}</h3></li>`);
                resolve(); 
            }, 500 * i);
        }));
    }
    await Promise.all(timeoutPromises);
    $(".final").html(`<h2>Congrats! You refered ${refs.length} people. But is it higher than Shafin's?</h2>
        <a href="./result.html"target="_blank"><button type="button" class="btn btn-outline-secondary btn-lg">Check</button></a>`);
});