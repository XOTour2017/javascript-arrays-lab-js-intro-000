const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function kittens() {
  return kittens
}

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newArr = kittens.slice()
  newArr.push(name)
  return newArr
}
