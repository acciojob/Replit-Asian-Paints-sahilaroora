//your JS code here. If required.
// your JS code here. If required.

const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all blocks first
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }

  // Apply color to specific block if valid
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", () => {
  // Reset all blocks to transparent
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).style.backgroundColor = "transparent";
  }
});
