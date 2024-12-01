
// This line of code will make sure the page is fully loaded
window.onload = function () {
    // Write the logic in this function

    // 1. Get the excuse element
    const excuse = document.getElementById('excuse');

    // 2. Generate a random excuse

    const part1 = [
        'My little brother',
        'The construction workers',
        'The babysitter',
        'My old laptop',
        'The bus driver',
        'The cleaning staff',
        'My gym trainer',
        'The power company'
    ];

    const part2 = [
        'took',
        'broke',
        'misfiled',
        'destroyed',
        'jammed',
        'spilled ink on',
        'sent the wrong version of',
        'erased',
        'blocked access to',
        'left behind'
    ];

    const part3 = [
        'my project report',
        'the blueprint',
        'my travel tickets',
        'the guest list',
        'my favorite recipe book',
        'my signed contract',
        'the exam preparation materials',
        'the team roster',
        'my email password',
        'my car keys'
    ];

    const part4 = [
        'while I was in the shower',
        'late last night',
        'this afternoon',
        'just before the meeting',
        'right after lunch',
        'last weekend',
        'during the thunderstorm',
        'when I was on the call',
        'earlier this morning',
        'right before I left the house'
    ];

    const indexPart1 = Math.floor(Math.random() * part1.length);
    const indexPart2 = Math.floor(Math.random() * part2.length);
    const indexPart3 = Math.floor(Math.random() * part3.length);
    const indexPart4 = Math.floor(Math.random() * part4.length);
    


    const randomExcuse = `${part1[indexPart1]} ${part2[indexPart2]} 
                          ${part3[indexPart3]} ${part4[indexPart4]}`;

    // 3. Inseart the excuse into the excuse element
    excuse.innerHTML = randomExcuse;
}