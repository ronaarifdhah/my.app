const part1 = [
  "Biarpun kita hilang",
  "Tak lagi bersama",
  "Tak lagi bercinta",
  "Berdua"
];

const part2 = [
  "Masih saja ku pandang",
  "Wajah nya yang hilang",
  "Tak akan berganti",
  "Dia abadi"
];

const part3 = [
  "Abadi abadi",
  "Untuk selamanya",
  "Abadi",
  "Untuk selamanya"
];

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function printSlow(text, speed) {
  for (let char of text) {
    process.stdout.write(char);
    await sleep(speed * 1000);
  }
  process.stdout.write('\n');
}

async function main() {
  console.log("☁️  Abadi - Dendi Nata. For Amel ☁️");
  console.log("------------------------");

  for (let line of part1) {
    await printSlow(line, 0.15); 
    await sleep(1000);
  }

  console.log(""); 

  for (let line of part2) {
    await printSlow(line, 0.12); 
    await sleep(800);
  }

  console.log("");

  for (let i = 0; i < part3.length; i++) {
    let speed = (i === 0) ? 0.2 : 0.35;
    await printSlow(part3[i], speed);
    await sleep(1500);
  }

  console.log("\n" + "------------------------");
  console.log("✨ Abadi untuk selamanya...");
}

main();