import { Measure } from './measure.model';


/** model for the Researcher object */
export class Researcher {
    mnumber: string;
    firstName: string;
    lastName: string;
    email: string;
    department: string;
    measures: Measure[];

    constructor(mnumber: string,firstName: string,lastName: string,email: string,department: string,measures:Measure[]) {
        this.mnumber = mnumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.measures = measures;
    }
    
}