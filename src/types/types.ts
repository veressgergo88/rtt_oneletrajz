export type Personal = {
  hu: {
    birthday: string,
    birthLocation: string
  },
  en: {
    birthday: string,
    birthLocation: string
  }
}

export type Header = {
  hu: {
    name: string,
    location: string,
    email: string,
    phoneNumber: string,
  },
  en: {
    name: string,
    location: string,
    email: string,
    phoneNumber: string
  },
}

export type Title = {
  hu: {
    personal: string,
    website: string,
    plans: string,
    experience: string,
    education: string
  },
  en: {
    personal: string,
    website: string,
    plans: string,
    experience: string,
    education: string
  }
}

type Items = {
  infoTitle: string,
  infoDate: string,
  infoList: string[]
}

export type Job = {
  hu: Items[],
  en: Items[]
};

export type Education = {
  hu: Items[],
  en: Items[]
}

export type Language = {
  hu: {
    language: string,
    level: string
  },
  en: {
    language: string,
    level: string
  }
}

export type Skill = {
  hu: string[],
  en: string[]
}

export type Plan = {
  hu: string[],
  en: string[]
}