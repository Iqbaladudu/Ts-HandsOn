interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueID: () => string;
}

const iqbal: Employee = {
    name: "Iqbal",
    id: 2,
    isManager: false,
    getUniqueID: (): string => {
        let uniqueID = iqbal.id + "-" + iqbal.name
        if(!iqbal.isManager) {
            return "emp-" + uniqueID
        }
        return uniqueID
    }
}

console.log(iqbal.getUniqueID())