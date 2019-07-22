export class SettingsService {
  private altBg = false;

  setBg(isAlt: boolean) {
    this.altBg = isAlt;
  }

  isaltBg() {
    return this.altBg;
  }
}
