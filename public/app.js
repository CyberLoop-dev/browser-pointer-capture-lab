const pad = document.querySelector("#pad");
const toggle = document.querySelector("#capture-toggle");
const log = document.querySelector("#events");
const position = document.querySelector("#position");
function record(name, event) {
  const item = document.createElement("li");
  const captured = pad.hasPointerCapture?.(event.pointerId) ? "captured" : "not captured";
  item.textContent = `${name} · id ${event.pointerId} · ${event.pointerType} · ${captured}`;
  log.prepend(item);
  while (log.children.length > 45) log.lastElementChild.remove();
}
pad.addEventListener("pointerdown", event => {
  if (toggle.checked && pad.setPointerCapture) {
    try { pad.setPointerCapture(event.pointerId); } catch {}
  }
  record("pointerdown", event);
});
pad.addEventListener("pointermove", event => {
  const rect = pad.getBoundingClientRect();
  position.textContent = `x: ${Math.round(event.clientX - rect.left)} · y: ${Math.round(event.clientY - rect.top)}`;
  if (event.buttons || pad.hasPointerCapture?.(event.pointerId)) record("pointermove", event);
});
for (const name of ["pointerup", "pointercancel", "lostpointercapture"]) {
  pad.addEventListener(name, event => record(name, event));
}
document.querySelector("#clear").addEventListener("click", () => { log.replaceChildren(); });
