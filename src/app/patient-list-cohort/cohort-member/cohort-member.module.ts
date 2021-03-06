import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/primeng';
import { SelectModule } from 'ng2-select';
import { OpenmrsApi } from '../../openmrs-api/openmrs-api.module';
import { PatientSearchModule } from './../../patient-search/patient-search.module';
import { AddCohortMemberComponent } from './add-cohort-member.component';
import { CohortSelectorComponent } from './cohort-selector.component';
import { AddToCohortDialogComponent } from './add-to-cohort-dialog.component';

@NgModule({
    imports: [
        OpenmrsApi,
        PatientSearchModule,
        FormsModule,
        CommonModule,
        DialogModule,
        SelectModule
    ],
    exports: [
        AddCohortMemberComponent,
        AddToCohortDialogComponent
    ],
    declarations: [
        AddCohortMemberComponent,
        CohortSelectorComponent,
        AddToCohortDialogComponent
    ],
    providers: [],
})
export class CohortMemberModule { }
