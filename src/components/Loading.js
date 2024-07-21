import React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
import { selectIsLoading } from "../app/loadingSlice";

const StyledLoading = styled("div")(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}));

const Loading = () => {
  const isLoading = useSelector(selectIsLoading);

  return isLoading ? (
    <StyledLoading>
      <LinearProgress />
    </StyledLoading>
  ) : null;
};

export default Loading;
