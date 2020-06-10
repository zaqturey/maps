import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Creating Objects of 'User', 'Company' and 'CustomMap', passing in the the 'divId' as argument
const user =  new User();
const company = new Company();
const customMap = new CustomMap('map');

// Note: as 'User' and 'Company' satisfies the type 'Mappable' ('interface' in 'CustomMap.ts')
// these can be passed as argument to 'addMarker'
customMap.addMarker(user);
customMap.addMarker(company);
