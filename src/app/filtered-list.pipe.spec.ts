import { FilteredListPipe } from './filtered-list.pipe';
import { StubService } from './stub.service';
import { FilterControlsService } from './filter-controls.service';

describe('FilteredListPipe', () => {
  it('create an instance', () => {
    const pipe = new FilteredListPipe(stub: StubService, filterModels: FilterControlsService);
    expect(pipe).toBeTruthy();
  });
});
