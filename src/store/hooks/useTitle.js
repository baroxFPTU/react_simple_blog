import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../slices/globalSlice";

function useTitle(title) {
  const currentTitle = useSelector(state => state.global.currentTitle);
  const dispatch = useDispatch();

  const updatePageTitle = useCallback((newTitle) => {
    if (!newTitle) {
      console.error("You need to assign a new title follow string");
      return;
    }
    document.title = newTitle;
    dispatch(updateTitle(newTitle));
  }, []);

  const updateSiteTitle = useCallback((newTitle) => {
    if (!newTitle) {
      console.error("You need to assign a new title follow string");
      return;
    }
    document.title = newTitle;
  })

  useEffect(() => {
    document.title = title;
    dispatch(updateTitle(title));
  }, []);

  return [currentTitle, updateSiteTitle, updatePageTitle];
};

export default useTitle;