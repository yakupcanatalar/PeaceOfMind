package com.atalar.peace_of_mind.model;

public enum SubType {
    FAST_FOOD(Type.RESTORAN),
    FINE_DINING(Type.RESTORAN),
    LOKANTA(Type.RESTORAN),
    STEAKHOUSE(Type.RESTORAN),
    DENIZ_URUNLERI(Type.RESTORAN),
    VEGAN(Type.RESTORAN),
    ASYA_MUTFAĞI(Type.RESTORAN),
    ITALYAN_MUTFAĞI(Type.RESTORAN),

    // KAFE
    KAHVE_DUKKANI(Type.KAFE),
    CAY_EVİ(Type.KAFE),
    PASTANE(Type.KAFE),
    TATLI_KAFE(Type.KAFE),

    // MARKET
    SUPERMARKET(Type.MARKET),
    MINI_MARKET(Type.MARKET),
    ORGANIK_MARKET(Type.MARKET),
    INDIRIM_MARKET(Type.MARKET),

    // KASAP
    HELAL_KASAP(Type.KASAP),
    ARTIZAN_KASAP(Type.KASAP),
    TOPTAN_KASAP(Type.KASAP),

    // KUAFÖR
    BERBER(Type.KUAFOR),
    GÜZELLİK_SALONU(Type.KUAFOR),
    SAÇ_KAYNAK(Type.KUAFOR),
    KERATİN_BAKIM(Type.KUAFOR),

    // PASTANE
    EKMEK_FIRINI(Type.PASTANE),
    HAMUR_ISLERI(Type.PASTANE),
    PASTA_DUKKANI(Type.PASTANE),

    // ECZANE
    HOMEOPATIK_ECZANE(Type.ECZANE),
    ECZANE(Type.ECZANE),
    HASTANE_ECZANESI(Type.ECZANE),

    // SPOR SALONU
    FITNESS_SALONU(Type.SPOR_SALONU),
    CROSSFIT(Type.SPOR_SALONU),
    YOGA_STUDIYO(Type.SPOR_SALONU),
    PILATES_STUDIYO(Type.SPOR_SALONU),

    // OTEL
    LUKS_OTEL(Type.OTEL),
    BUTIK_OTEL(Type.OTEL),
    MOTEL(Type.OTEL),
    HOSTEL(Type.OTEL),

    // KÜTÜPHANE
    HALK_KUTUPHANESI(Type.KUTUPHANE),
    UNIVERSITE_KUTUPHANESI(Type.KUTUPHANE),
    DIJITAL_KUTUPHANE(Type.KUTUPHANE),

    // SİNEMA
    IMAX(Type.SINEMA),
    ACIK_HAVA_SINEMASI(Type.SINEMA),
    BAGIMSIZ_SINEMA(Type.SINEMA),

    // TİYATRO
    DRAMA_TIYATROSU(Type.TIYATRO),
    MUZIKAL_TIYATRO(Type.TIYATRO),
    DENEYSEL_TIYATRO(Type.TIYATRO),

    // BAR
    SPOR_BAR(Type.BAR),
    KOKTEYL_BAR(Type.BAR),
    SARA_P_BAR(Type.BAR),

    // GECE KULÜBÜ
    ELEKTRONIK_MUZIK_KULUBU(Type.GECE_KULUBU),
    CAZ_KULUBU(Type.GECE_KULUBU),
    LATIN_KULUBU(Type.GECE_KULUBU),

    // KİTAPÇI
    IKINCI_EL_KITAPCI(Type.KITAPCI),
    CIZGI_ROMAN_KITAPCI(Type.KITAPCI),
    AKADEMIK_KITAPCI(Type.KITAPCI),

    // ELEKTRONİK MAĞAZASI
    TELEFON_MAGAZASI(Type.ELEKTRONIK_MAGAZA),
    BILGISAYAR_MAGAZASI(Type.ELEKTRONIK_MAGAZA),
    BEYAZ_ESYA_MAGAZASI(Type.ELEKTRONIK_MAGAZA),

    // MOBİLYA MAĞAZASI
    MODERN_MOBILYA(Type.MOBILYA_MAGAZASI),
    KLASIK_MOBILYA(Type.MOBILYA_MAGAZASI),
    OFIS_MOBILYASI(Type.MOBILYA_MAGAZASI),

    // GİYİM MAĞAZASI
    ERKEK_GIYIM(Type.GIYIM_MAGAZASI),
    KADIN_GIYIM(Type.GIYIM_MAGAZASI),
    COCUK_GIYIM(Type.GIYIM_MAGAZASI),

    // AYAKKABI MAĞAZASI
    SPOR_AYAKKABI(Type.AYAKKABI_MAGAZASI),
    KLASIK_AYAKKABI(Type.AYAKKABI_MAGAZASI),
    GUNLUK_AYAKKABI(Type.AYAKKABI_MAGAZASI),

    // KUYUMCU
    ALTIN_KUYUMCU(Type.KUYUMCU),
    GUMUS_KUYUMCU(Type.KUYUMCU),
    PIRLANTA_KUYUMCU(Type.KUYUMCU),

    // OYUNCAK MAĞAZASI
    EGITICI_OYUNCAKLAR(Type.OYUNCAK_MAGAZASI),
    AKSIYON_FIGURLER(Type.OYUNCAK_MAGAZASI),
    MASA_OYUNLARI(Type.OYUNCAK_MAGAZASI),

    // PET SHOP
    AKVARYUM_MAGAZASI(Type.PET_SHOP),
    KEDI_KOPEK_URUNLERI(Type.PET_SHOP),
    EGZOTIK_HAYVAN_MAGAZASI(Type.PET_SHOP),

    // ARAÇ KİRALAMA
    LUKS_ARAC_KIRALAMA(Type.ARAC_KIRALAMA),
    EKONOMIK_ARAC_KIRALAMA(Type.ARAC_KIRALAMA),
    SUV_KIRALAMA(Type.ARAC_KIRALAMA),

    // BENZİN İSTASYONU
    TAM_HIZMET_BENZIN_ISTASYONU(Type.BENZIN_ISTASYONU),
    SELF_SERVIS_BENZIN_ISTASYONU(Type.BENZIN_ISTASYONU),
    ELEKTRIKLI_ARAC_SARJ_ISTASYONU(Type.BENZIN_ISTASYONU),

    // BANKA
    TICARI_BANKA(Type.BANKA),
    YATIRIM_BANKASI(Type.BANKA),
    DIJITAL_BANKA(Type.BANKA),

    // HASTANE
    GENEL_HASTANE(Type.HASTANE),
    OZEL_HASTANE(Type.HASTANE),
    COCUK_HASTANESI(Type.HASTANE),

    // DİŞ HEKİMİ
    ORTODONTI(Type.DIS_HEKIMI),
    COCUK_DIS_HEKIMI(Type.DIS_HEKIMI),
    KOZMETIK_DIS_HEKIMI(Type.DIS_HEKIMI),

    // GÖZLÜKÇÜ
    NUMARALI_GOZLUK(Type.GOZLUKCU),
    KONTAKT_LENS(Type.GOZLUKCU),
    GUNES_GOZLUK(Type.GOZLUKCU);
    private final Type type;

    SubType(Type type) {
        this.type = type;
    }

    public Type getType() {
        return type;
    }
}
