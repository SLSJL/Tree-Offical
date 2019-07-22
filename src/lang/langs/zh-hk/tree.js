import knowledgeCnt from "./../../../config/knowledgeCnt";

export default {
  nav: [
    {
      text: "樹木",
      route: "/tree/index"
    },
    {
      text: "StoryMap",
      route: "/tree/storymap"
    },
    {
      text: "資訊卡",
      route: "/tree/InfoCard"
    }
  ],
  details: {
    p1: {
      caption: "城市樹木現狀",
      body:
        "礙於狹窄的生長空間、缺乏肥沃的土壤、疏於護養、以及愈趨頻繁的暴雨和颱風天氣影響之下，城市樹木正在面臨重大危機。對於某些品種的樹木有著極大的影響，以致它們無力抵抗極端氣候。"
    },
    p2: {
      caption: "生態系統服務",
      body1:
        "城市樹木為居民提供重要的生態系統服務，如去除空氣污染物、碳儲存、減輕熱島效應、防洪、改善水質、增強美學、保存生物多樣性及保育環境；隨著全球暖化，城市林木的規劃及管理成為關鍵的緩解措施，並配合氣候適應來對抗全球氣候變化。",
      body2: `樹木是一個充滿活力的系統，它們牢牢地抓緊土壤，固定樹根、樹幹和樹葉。透過測量樹木的轉動方向或紀錄樹木的傾斜角度，我們可以檢測樹木潛在的根部狀況，以防樹木倒塌的危機。當風吹向樹冠時，會向樹基產生轉向動力，同時樹木根部會形成反作用力，抵抗風力。因此，在外在的風力與樹木獨特的頻率振動的配合下，樹木的不同位置會形成相互作用。如果根部的強度不足以抵受轉向動量，樹木會開始傾斜或被連根拔起，然後倒下。為了確保公眾安全，測量城市樹木根部的穏定性能監察樹木的倒塌風險。`
    },
    p3: {
      caption: "技術如何幫助樹木管理",
      body: `現時許多研究報告通過各種可量化的工具來測量樹木轉動，這有助於量度樹木受風力而引致的旋轉、位移或傾斜等情況。
      雖然使用加速度計測量樹木傾斜並不是最新的方法，但傳感器技術能夠測量樹木對風力的反應，記錄樹木接近地面時的傾斜角度，提供數據以深入了解根部強度。
      在不穩定的天氣條件下，對於不同樹種的根部反應尤其重要，相關的數據可供團隊研究樹木倒塌模式。此外，樹木管理需要定期監察根部，樹木監測系統提供早期通知，及早預防因根部造成的樹木風險。
      `
    },
    p4: {
      caption: "監測樹種",
      body1:
        "此先導計劃選取多種市區常見的樹木品種作為測驗，例如：宮粉羊蹄甲、鳳凰木、鐵刀木、石栗等。",
      body2: {
        item1: "Bauhinia variegata:",
        item2: "Delonix regia:",
        item3: "Senna siamea:",
        item4: "Aleurites moluccana:"
      }
    },
    p5: {
      caption: "城市樹木",
      body1:
        " 城市樹木為城市居民提供生態系統服務，如移除空氣污染物、碳截存、減輕熱島效應、城市防洪、改善水質、提高城市美學、增強和保育生物多樣性。隨著全球城市化的不斷發展，城市樹木的規劃管理成為適應和緩解全球氣候變化的關鍵措施。"
    },
    p6: {
      caption: "古樹名木冊",
      body1:
        "香港政府已建立了古樹名木冊（OVT），以確保城市樹木得到妥善的保存和維護，並保護我們的遺產和珍貴的自然資源。OVT資訊包括大樹、珍貴或稀有樹木品種、古樹（例如樹齡超過一百年）、具有文化、歷史或重要紀念意義的樹木；以及樹形出衆的樹木。OVT資訊還包括每棵樹的物理和健康狀況，其位置和預期壽命。目前，已註冊的OVT約有460個。",
      body2: "歡迎訪問以下鏈接以獲取更多參考資料：",
      body3:"https://www.gov.hk/tc/residents/environment/conservation/regoldvaluetree.htm",
      body4:"https://www.greening.gov.hk/treeregister/map/treeIndex.aspx?lang=zh-HK"
    }
  },
  infocard: {
    tips: "按下資訊卡探索香港如何管理樹木！"
  },
  infoCards: [
    {
      id: "k-1-proper",
      text: "正確種植方法",
      icon: require("./../../../assets/images/tree/info1.png"),
      fClr: "#887567",
      bgClr: "#fef0e6"
    },
    {
      id: "k-2-risk",
      text: "護養樹木  保障安全",
      icon: require("./../../../assets/images/tree/info2.png"),
      fClr: "#008cd2",
      bgClr: "#daf8ff"
    },
    {
      id: "k-3-green",
      text: "綠化的好處",
      icon: require("./../../../assets/images/tree/info3.png"),
      fClr: "#303030",
      bgClr: "#f2f2f2"
    },
    {
      id: "k-4-maintenance",
      text: "樹木護養",
      icon: require("./../../../assets/images/tree/info4.png"),
      fClr: "#dc6200",
      bgClr: "#fef0e6"
    },
    {
      id: "k-5-assessment",
      text: "樹木風險評估及管理安排",
      icon: require("./../../../assets/images/tree/info5.png"),
      fClr: "#df251f",
      bgClr: "#ffe1e1"
    },
    {
      id: "k-6-pruning",
      text: "樹木修剪",
      icon: require("./../../../assets/images/tree/info6.png"),
      fClr: "#00877a",
      bgClr: "#c9f6f2"
    },
    {
      id: "k-7-leaf",
      text: "常見樹葉形狀",
      icon: require("./../../../assets/images/tree/info7.png"),
      fClr: "#168234",
      bgClr: "#e4fce2"
    }
  ],
  acknowledgement:
    "特別鳴謝香港特區政府發展局，綠化、園境及樹木管理組提供本網站相關資訊卡的內容。",
  knowledgeInfo: {
    "k-1-proper": knowledgeCnt["proper"],
    "k-2-risk": knowledgeCnt["risk"],
    "k-3-green": knowledgeCnt["green"],
    "k-4-maintenance": knowledgeCnt["maintenance"],
    "k-5-assessment": knowledgeCnt["assessment"],
    "k-6-pruning": knowledgeCnt["pruning"],
    "k-7-leaf": knowledgeCnt["leaf"]
  }
};
