import { useContext } from "react";

import { langContext } from "../../langContext";

const useLang = () => {
    const data = useContext(langContext);

    return data;
}

export default useLang;