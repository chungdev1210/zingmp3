import React from "react";

const useUrl = () => {
    const url = {
        login: "/login",
        register: "/logout",
        account: "/account",
        categories: "/hub",
        getCategory: function (id) {
            return this.categories + "/" + id;
        },
        getPlaylist: function (id) {
            return `/danh-sach-phat/${id}`;
        },
    };

    return url;
};

export default useUrl;