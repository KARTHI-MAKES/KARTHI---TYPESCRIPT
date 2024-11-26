class Animal {
    makeSound(): void {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal{
    makeSound(): void {
        console.log("BARK")
    }

     animalSound(animal:Animal){
             animal.makeSound()
    }
}
class Cat extends Dog{
    makeSound(): void {
        console.log("MEOW")
    }
    catSound(animal:Animal){
             animal.makeSound()
    }
}
const sound:Dog= new Dog()
 sound.animalSound(new Animal()) // THIS WILL GIVE U THE FIRST METHOD OUTPUT 
sound.animalSound(new Dog())
sound.animalSound(new Cat())