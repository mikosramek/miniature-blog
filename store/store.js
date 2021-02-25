import create from 'zustand'

export const useStore = create(set => ({
  title: 'Miko\'s Miniature Blog',

  setTitle : (val) => set(() => ({ title : val }))
}));
