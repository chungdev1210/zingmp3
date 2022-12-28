import React from "react";
import useString from "./useString";

const useUrl = () => {
    const str = useString()
    const url = {
        login: "/login",
        register: "/logout",
        account: "/account",
        categories: "/hub/:slug--:id.html",
        getCategory: function (id, title) {
            const slug = str.getSlug(title);
            return this.categories.replace(":id", id).replace(":slug", slug);
        },
        getPlaylist: function (id) {
            return `/danh-sach-phat/${id}`;
        },
    };

    return url;
};

export default useUrl;