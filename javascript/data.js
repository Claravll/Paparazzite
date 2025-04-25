const cardsData = [
    {
        name: "Argasidae",
        group: "acariens",
        suit : "acariens-list",
        category : "acariens-photo",
        backgroundImage: "images/argaside.png",
        items: [
            { name: "Argas sp.", file: "pdf/argas_sp.pdf", etiquette: "etiquettes/argas.png", photo: "photos/argas.jpg" },
            { name: "Ornithodoros sp.", file: "pdf/ornithodoros_sp.pdf", etiquette: "etiquettes/ornothodoros.png", photo: "images/bovicola.png" }
        ]
    },

    {
        name: "Dermanyssidae",
        group: "acariens",
        suit : "acariens-list",
        category : "acariens-photo",
        backgroundImage: "images/dermanyssus.png",
        items: [
            { name: "Dermanyssus gallinae", file: "pdf/dermanyssus_gallinae.pdf", etiquette: "etiquettes/dermanyssus.png", photo: "photos/dermanyssus.jpg" },
            { name: "Varroa destructor jacobsoni", file: "pdf/varroa_destructor.pdf", etiquette: "etiquettes/varroa.png", photo: "photos/varroa.jpg" }
        ]
    },

    {
        name: "Ixodidae",
        backgroundImage: "images/ixodes.png",
        group: "acariens",
        suit : "acariens-list",
        category : "acariens-photo",
        items: [
            { name: "Dermacentor reticulatus", file: "pdf/dermacentor_reticulatus.pdf", etiquette: "etiquettes/dermatocentor.png", photo: "images/argaside.png" },
            { name: "Ixodes ricinus", file: "pdf/ixodes_ricinus.pdf", etiquette: "etiquettes/ixodes.png", photo: "photos/ixodes_ricinus.jpg" },
            { name: "Rhipicephalus sanguineus", file: "pdf/rhipicephalus_sanguineus.pdf", etiquette: "etiquettes/rhipicephalus.png", photo: "photos/rhipicephalus_sanguineus.jpg" }
        ]
    },

    {
        name: "Psoroptidae",
        group: "acariens",
        suit : "acariens-list",
        category : "acariens-photo",
        backgroundImage: "images/sarcoptes.png",
        items: [
            { name: "Chorioptes sp.", file: "pdf/chorioptes_sp.pdf", etiquette: "etiquettes/chorioptes.png", photo: "photos/chorioptes.jpg" },
            { name: "Otodectes sp.", file: "pdf/otodectes_sp.pdf", etiquette: "etiquettes/otodectes.png", photo: "photos/octodectes.jpg" },
            { name: "Psoroptes sp.", file: "pdf/psoroptes.pdf", etiquette: "etiquettes/psoroptes.png", photo: ["photos/psoroptes_1.png", "photos/psoroptes_2.png", "photos/psoroptes_3.png", "photos/psoroptes_4.png", "photos/psoroptes_5.png"] }
        ]
    },

    {
        name: "Sarcoptidae",
        group: "acariens",
        suit : "acariens-list",
        category : "acariens-photo",
        backgroundImage: "images/psoroptes.png",
        items: [
            { name: "Sarcoptes scabei", file: "pdf/sarcoptes_scabiei.pdf", etiquette: "etiquettes/sarcoptes.png", photo: "photos/sarcoptes.jpg"}
        ]   
    },

    {
        name: "Thrombidiformes",
        group: "acariens",
        suit : "acariens-list",
        category : "acariens-photo",
        backgroundImage: "images/thrombidide.png",
        items: [
            { name: "Cheyletellia sp.", file: "pdf/cheyletiella.pdf", etiquette: "etiquettes/cheyletiella.png", photo: "photos/cheyletiella.jpg" },
            { name: "Demodex sp.", file: "pdf/demodex.pdf", etiquette: "etiquettes/demodex.png", photo: "images/argaside.png" },
            { name: "Thrombicula autumnalis", file: "pdf/thrombicula.pdf", etiquette: "etiquettes/trombicula.png", photo: "images/argaside.png" }
        ]
    },


    {
        name: "Anoploures-Hematopinidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/haematopinus.png",
        items: [
            { name: "Haematopinus sp.", file: "pdf/haematopinus.pdf", etiquette: "etiquettes/haematopinus.png", photo: "photos/haematopinus.jpg" },
            { name: "Lignognathus sp.", file: "pdf/linognathus.pdf", etiquette: "etiquettes/argas.png", photo: "photos/lignognathus-1.jpg" }
        ]
    },

    {
        name: "Ceratopogonidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/culicoide.png",
        items: [
            { name: "Culicoïdes sp.", file: "pdf/culicoides.pdf", etiquette: "etiquettes/culicoides.png", photo: [ "photos/culicoides.jpg", "photos/culicoides_1.png","photos/culicoides_2.png" ] }
        ]
    },

    {
        name: "Cimicidae-Cimex",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/cimex.png",
        items: [
            { name: "Cimex lectularius", file: "pdf/cimex_lectularius.pdf", etiquette: "etiquettes/argas.png", photo: "images/argaside.png" }
        ]
    },

    {
        name: "Culicidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/culicides.png",
        items: [
            { name: "Anaphélinés", file: "pdf/anophelines.pdf", etiquette: "etiquettes/anaphelines.png", photo: "images/argaside.png" },
            { name: "Culicinés", file: "pdf/culicines.pdf", etiquette: "etiquettes/culicines.png", photo: "photos/culicinés.jpg" }
        ]
    },

    {
        name: "Hippoboscidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/melophagus.png",
        items: [
            { name: "Melophagus ovinus", file: "pdf/melophagus_ovinus.pdf", etiquette: "etiquettes/melophagus.png", photo: "images/argaside.png" }
        ]
    },

    {
        name: "Larves d'insectes",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/larves.png",
        items: [
            { name: "Gasterophilus intestinalis", file: "pdf/gasterophilus_sp.pdf", etiquette: "etiquettes/gasterophilus.png", photo:  [ "photos/gasterophilus_1.png", "photos/gasterophilus_2.png","photos/gasterophilus_3.png", "photos/gasterophilus_4.png", "photos/gasterophilus_5.png", "photos/gasterophilus_6.png", "photos/gasterophilus_7.png", "photos/gasterophilus_8.png" ] },
            { name: "Hypoderma bovis", file: "pdf/hypoderma_bovis.pdf", etiquette: "etiquettes/hypoderma.png", photo: "images/argaside.png" },
            { name: "Oestrus ovis", file: "pdf/oestrus_ovis.pdf", etiquette: "etiquettes/oestrus_ovis.png", photo: "images/argaside.png" },
        ]
    },

    {
        name: "Mallophages-Trichodectidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/bovicola.png",
        items: [
            { name: "Bovicola sp.", file: "pdf.bovicola.pdf", etiquette: "etiquettes/argas.png", photo: "photos/bovicola.jpg" },
            { name: "Trichodectes canis", file: "pdf/trichodecte_canis.pdf", etiquette: "etiquettes/trichodectes.png", photo: "photos/tricodectes_canis.jpg" }
        ]
    },

    {
        name: "Psychodidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/phlebotomus.png",
        items: [
            { name: "Phlebotomus sp.", file: "pdf/phlebotomus.pdf", etiquette: "etiquettes/phlebotomus.png", photo: "photos/phlebotum.jpg" }
        ]
    },

        {
        name: "Pullucidae-Ctenocephalidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/ctenocephalides.png",
        items: [
            { name: "Ctenocephalides canis", file: "pdf/ctenocephalides_canis.pdf", etiquette: "etiquettes/ctenocephalides_canis.png", photo: "photos/c_canis.jpg" },
            { name: "Ctenocephalides felis", file: "pdf/ctenocephalides_felis.pdf", etiquette: "etiquettes/ctenocephalides_felis.png", photo: "photos/c_felis.jpg" }
        ]
    },

    {
        name: "Simuliidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/simulium.png",
        items: [
            { name: "Simulium sp.", file: "pdf/simulium.pdf", etiquette: "etiquettes/simulium.png", photo: "photos/simulium.jpg" }
        ]
    },
    {
        name: "Tabanidae",
        group: "mandibulate",
        suit : "mandibulates-list",
        category : "mandibulates-photo",
        backgroundImage: "images/tabanus.png",
        items: [
            { name: "Tabanus", file: "pdf/tabanus.pdf", etiquette: "etiquettes/tabanus.png", photo: ["photos/tabanus_1.png", "photos/tabanus_2.png", "photos/tabanus_3.png", "photos/tabanus_4.png"] },
        ]
    }

];
