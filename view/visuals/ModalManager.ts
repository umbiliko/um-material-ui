export default interface ModalManager {
    add(modal: any, container: any): number;

    remove(modal: any): void;

    isTopModal(modal: any): boolean;
}
