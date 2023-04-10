class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (manager !== null){
            manager.addEmployee(this);
        }
    }

    calculateBonus(multipler) {
        let bonus = this.salary * multipler;
        return bonus;
    }

}

/* 
const leo = new Employee('Leonardo', 90000, 'Ninja');
console.log(leo)
 */
module.exports = Employee;


const raph = new Employee('Raphael', 90000, 'Ninja');
const donny = new Employee('Donatello', 85000, 'Grasshopper');

console.log(raph.calculateBonus(0.25)); // => 22500
console.log(donny.calculateBonus(0.15)); // => 12750