import Info from '#components-ui/alerts/info';
import { Tag } from '#components-ui/tag';
import AdministrationNotResponding from '#components/administration-not-responding';
import { LineChart } from '#components/chart/line';
import { Section } from '#components/section';
import { FullTable } from '#components/table/full';
import { EAdministration } from '#models/administrations';
import { isAPINotResponding } from '#models/api-not-responding';
import constants from '#models/constants';
import { IFinances } from '#models/donnees-financieres';
import { formatDateYear, formatCurrency, formatDate } from '#utils/helpers';

const ColorCircle = ({ color }: { color: string }) => (
  <span style={{ color }}>◆</span>
);

export const FinancesAssociationSection: React.FC<IFinances> = ({
  uniteLegale,
  financesAssociation,
}) => {
  if (isAPINotResponding(financesAssociation)) {
    const isNotFound = financesAssociation.errorType === 404;
    if (isNotFound) {
      return (
        <Section title="Indicateurs financiers" sources={[EAdministration.MI]}>
          <p>
            Aucun indicateur financier n’a été retrouvé pour cette association.
          </p>
        </Section>
      );
    }
    return (
      <AdministrationNotResponding
        administration={financesAssociation.administration}
        errorType={financesAssociation.errorType}
        title="Données financières"
      />
    );
  }

  const bilans = financesAssociation;
  const colorResultat = constants.chartColors[1];
  const colorCA = constants.chartColors[4];

  const body = [
    [
      <>
        <ColorCircle color={colorCA} /> Total des produits
      </>,
      ...bilans.map((a) => formatCurrency(a?.produits ?? '')),
    ],
    [
      'Total des charges',
      ...bilans.map((a) => formatCurrency(a?.charges ?? '')),
    ],
    [
      'Montants des dons perçus',
      ...bilans.map((a) => formatCurrency(a?.dons ?? '')),
    ],
    [
      'Montants des subventions perçues',
      ...bilans.map((a) => formatCurrency(a?.subv ?? '')),
    ],
    [
      <>
        <ColorCircle color={colorResultat} /> Résultat
      </>,
      ...bilans.map((a) => formatCurrency(a?.resultat ?? '')),
    ],
  ];

  return (
    <Section title="Indicateurs financiers" sources={[EAdministration.MI]}>
      <Info>
        Cette section est un travail en cours.
        <br />
        Si vous découvrez une erreur, merci de nous en faire part et nous la
        corrigerons au plus vite (
        <a href={constants.links.mailto}>{constants.links.mail}</a>).
      </Info>
      <p>
        Voici les résultats financiers déclarés par le siège social de
        l’association&nbsp;:
      </p>
      <br />
      <LineChart
        htmlLegendId={'finance-data-legend'}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label(tooltipItem) {
                  return formatCurrency(
                    tooltipItem.parsed.y.toString()
                  ).toString();
                },
              },
            },
            legend: { display: false },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              border: { display: false },
              ticks: {
                callback: (label) => {
                  return formatCurrency(label.toString());
                },
              },
            },
          },
        }}
        height={250}
        data={{
          labels: bilans.map((bilan) => bilan.year),
          datasets: [
            {
              label: 'Produit',
              tension: 0.3,
              data: bilans.map((bilan) => bilan.produits ?? 0),
              borderColor: colorCA,
              backgroundColor: colorCA,
            },
            {
              label: 'Resultat',
              tension: 0.3,
              data: bilans.map((bilan) => bilan.resultat ?? 0),
              borderColor: colorResultat,
              backgroundColor: colorResultat,
            },
          ],
        }}
      />
      <br />
      <FullTable
        head={['Indicateurs', ...bilans.map((a) => a?.year.toString())]}
        body={body}
      />
    </Section>
  );
};
