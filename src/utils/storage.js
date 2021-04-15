class Storage {
  constructor(prefix) {
    this.prefix = prefix;
  }

  get(key = "", defaultValue = null) {
    const data = localStorage.getItem(`${this.prefix}:${key}`);
    if (data) {
      return JSON.parse(data) || defaultValue;
    }
    return defaultValue;
  }

  set(key = "", value) {
    try {
      const parsed = JSON.stringify(value);
      localStorage.setItem(`${this.prefix}:${key}`, parsed);
    } catch ({ message }) {
      console.error("error when inserting content in storage", message);
    }
  }

  add(key = "", value) {
    const data = this.get(key, []);
    if (Array.isArray(data)) {
      data.push(value);
      this.set(key, data);
    }
  }

  remove(key) {
    localStorage.removeItem(`${this.prefix}:${key}`);
  }
}

export const storage = new Storage("@Marvel");
