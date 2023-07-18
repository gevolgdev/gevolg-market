import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialProps {
  downloaded: boolean
};

const initialState: InitialProps = {
  downloaded: true
};

const downloadedSlice = createSlice({
  name: 'downloaded',
  initialState,
  reducers: {
    download: (state, { payload }: PayloadAction<boolean>) => {
      state.downloaded = payload;
      return state;
    }
  }
});

export default downloadedSlice.reducer;
export const { download } = downloadedSlice.actions;