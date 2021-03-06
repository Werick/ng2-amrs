import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdProgressSpinnerModule, MdProgressBarModule, MdTabsModule, MaterialModule
} from '@angular/material';

import { oncologyProgramRouting } from './oncology-program.routes';
import {
  DateTimePickerModule
} from 'ng2-openmrs-formentry/dist/components/date-time-picker';
import { DataListsModule } from '../../shared/data-lists/data-lists.module';
import { AdminDashboardClinicFlowComponent } from './clinic-flow/admin-dashboard-clinic-flow';
import { HivCareLibModule } from '../../hiv-care-lib/hiv-care-lib.module';
import { dataAnalyticsDashboardHivRouting } from './hiv-program.routes';
import { NgamrsSharedModule } from '../../shared/ngamrs-shared.module';
import { HivSummaryIndicatorsComponent } from './hiv-summary-indicators/hiv-summary-indicators';
import { HivCareComparativeAnalyticsComponent
} from './hiv-data-visualization/hiv-overview-visualization';
import { DataAnalyticsDashboardService } from '../services/data-analytics-dashboard.services';
import { HivClinicFlowResourceService } from '../../etl-api/hiv-clinic-flow-resource.service';
import { ClinicFlowCacheService } from '../../hiv-care-lib/clinic-flow/clinic-flow-cache.service';
import { DataAnalyticsDashboardComponent } from '../data-analytics.component';

@NgModule({
  imports: [
    dataAnalyticsDashboardHivRouting,
    HivCareLibModule,
    DateTimePickerModule,
    NgamrsSharedModule,
    DataListsModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MdTabsModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MaterialModule
  ],
  exports: [
    DataAnalyticsDashboardComponent,
    AdminDashboardClinicFlowComponent,
    HivSummaryIndicatorsComponent,
    HivCareComparativeAnalyticsComponent
  ],
  declarations: [
    DataAnalyticsDashboardComponent,
    AdminDashboardClinicFlowComponent,
    AdminDashboardClinicFlowComponent,
    HivSummaryIndicatorsComponent,
    HivCareComparativeAnalyticsComponent],
  providers: [
    DataAnalyticsDashboardService,
    HivClinicFlowResourceService,
    ClinicFlowCacheService
  ],
})
export class DataAnalyticsHivProgramModule { }
